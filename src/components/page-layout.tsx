import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import ControlPanel from './control-panel'

/* Decorative grid behind the page content — 6 columns on mobile, 12 from md */
function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 mx-auto grid max-w-296 grid-cols-6 gap-4 px-4 opacity-33 md:grid-cols-12 xl:px-0"
    >
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className={`border-x border-border-accent bg-accent ${i >= 6 ? 'max-md:hidden' : ''}`}
        />
      ))}
    </div>
  )
}

const SHOW_GRID_KEY = 'show-grid'

function readShowGrid() {
  try {
    return localStorage.getItem(SHOW_GRID_KEY) !== 'false'
  } catch {
    return true
  }
}

/* On navigation: jump to the #hash target if there is one, otherwise to the top of the page */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
}

interface PageLayoutProps {
  children: ReactNode
  /** Vertical gap between the page's sections, e.g. "gap-32" */
  gap?: string
}

/* Shared page shell: card background, optional layout grid, control panel and the centred content column */
function PageLayout({ children, gap = 'gap-32' }: PageLayoutProps) {
  const [showGrid, setShowGrid] = useState(readShowGrid)
  useScrollOnNavigate()

  useEffect(() => {
    try {
      localStorage.setItem(SHOW_GRID_KEY, String(showGrid))
    } catch {
      /* ignore */
    }
  }, [showGrid])

  return (
    <div className="relative isolate min-h-svh bg-card">
      {showGrid && <BackgroundGrid />}
      <ControlPanel showGrid={showGrid} onShowGridChange={setShowGrid} />
      <main className={`mx-auto flex max-w-296 flex-col px-4 py-12 xl:px-0 ${gap}`}>{children}</main>
    </div>
  )
}

export default PageLayout
