import type { ReactNode } from "react";

/* Renders a plain string with a small Markdown-like syntax, so case-study copy can live in data files:

     Blank line          → new block (24px gap). Lines in the same block stack with no gap.
     **text**            → bold
     - item / 1. item    → bullet / numbered list; indent 2 spaces to nest a list
                           or to continue an item on a new line
     > line              → quote; each > line is its own line
     ### text            → sub-heading
     | a | b |           → table; the first row is the header, the next row must be |---|---|

   Anything else is a paragraph; single line breaks inside it are kept. */

interface ListItem {
  lines: string[];
  children: ListNode[];
}

interface ListNode {
  type: "list";
  ordered: boolean;
  items: ListItem[];
}

type Block =
  | { type: "paragraph"; lines: string[] }
  | { type: "quote"; lines: string[] }
  | { type: "heading"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | ListNode;

const listMarker = /^(\s*)([-*]|\d+\.)\s+(.*)$/;
const headingMarker = /^\s*#{1,6}\s+(.*)$/;
const isTableRow = (line: string) => line.trimStart().startsWith("|");
const isSpecial = (line: string) =>
  listMarker.test(line) ||
  headingMarker.test(line) ||
  isTableRow(line) ||
  line.trimStart().startsWith(">");
const indentOf = (line: string) => line.length - line.trimStart().length;
const tableCells = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

function parseList(
  lines: string[],
  start: number,
  indent: number,
): [ListNode, number] {
  const list: ListNode = {
    type: "list",
    ordered: /\d/.test(lines[start].trim()[0]),
    items: [],
  };
  let i = start;
  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(listMarker);
    const current = list.items[list.items.length - 1];
    if (match && match[1].length === indent) {
      list.items.push({ lines: [match[3]], children: [] });
      i++;
    } else if (match && match[1].length > indent && current) {
      const [child, next] = parseList(lines, i, match[1].length);
      current.children.push(child);
      i = next;
    } else if (!match && indentOf(line) > indent && current) {
      current.lines.push(line.trim());
      i++;
    } else {
      break;
    }
  }
  return [list, i];
}

function parseChunk(chunk: string): Block[] {
  const lines = chunk.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(listMarker);
    const heading = line.match(headingMarker);
    if (match) {
      const [list, next] = parseList(lines, i, match[1].length);
      blocks.push(list);
      i = next;
    } else if (heading) {
      blocks.push({ type: "heading", text: heading[1] });
      i++;
    } else if (isTableRow(line)) {
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        const cells = tableCells(lines[i]);
        if (!cells.every((cell) => /^:?-+:?$/.test(cell))) rows.push(cells);
        i++;
      }
      blocks.push({ type: "table", head: rows[0] ?? [], rows: rows.slice(1) });
    } else if (line.trimStart().startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith(">")) {
        quote.push(lines[i].trimStart().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", lines: quote });
    } else {
      const paragraph: string[] = [];
      while (i < lines.length && !isSpecial(lines[i])) {
        paragraph.push(lines[i].trim());
        i++;
      }
      blocks.push({ type: "paragraph", lines: paragraph });
    }
  }
  return blocks;
}

function renderInline(text: string): ReactNode[] {
  return text
    .split(/(\*\*.+?\*\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      ),
    );
}

function renderLines(lines: string[]): ReactNode[] {
  return lines.flatMap((line, i) => [
    ...(i > 0 ? [<br key={`br-${i}`} />] : []),
    <span key={i}>{renderInline(line)}</span>,
  ]);
}

function renderList(list: ListNode, key: number): ReactNode {
  const Tag = list.ordered ? "ol" : "ul";
  return (
    <Tag
      key={key}
      className={`${list.ordered ? "list-decimal" : "list-disc"} ps-6`}
    >
      {list.items.map((item, i) => (
        <li key={i}>
          {renderLines(item.lines)}
          {item.children.map(renderList)}
        </li>
      ))}
    </Tag>
  );
}

function renderBlock(block: Block, key: number): ReactNode {
  switch (block.type) {
    case "list":
      return renderList(block, key);
    case "quote":
      return (
        <blockquote key={key} className="flex gap-2">
          <span aria-hidden="true" className="flex flex-col items-center">
            <span className="icon icon-20 icon-filled text-muted-foreground">
              format_quote
            </span>
            <span className="w-0.5 flex-1 rounded-full bg-muted-foreground" />
          </span>
          <p>{renderLines(block.lines)}</p>
        </blockquote>
      );
    case "heading":
      return (
        <h4 key={key} className="text-heading-h4-bold text-foreground">
          {renderInline(block.text)}
        </h4>
      );
    case "table":
      return (
        <div key={key} className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-input-border-strong">
                {block.head.map((cell, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="py-2 pe-4 text-label-lg text-neutral-foreground uppercase last:pe-0"
                  >
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-border">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className="py-2 pe-4 whitespace-nowrap last:pe-0"
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return <p key={key}>{renderLines(block.lines)}</p>;
  }
}

interface RichTextProps {
  text: string;
  className?: string;
}

function RichText({ text, className = "" }: RichTextProps) {
  const chunks = text.trim().split(/\n\s*\n/);
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {chunks.map((chunk, i) => (
        <div key={i}>{parseChunk(chunk).map(renderBlock)}</div>
      ))}
    </div>
  );
}

export default RichText;
