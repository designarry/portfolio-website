import { Link } from 'react-router-dom'
import Logo from './logo'

export interface NavLink {
  label: string
  /** Router path; root-relative ("/#works") so it works from any page */
  to: string
}

const resumeUrl = '#'

interface HeaderProps {
  /** Page links shown before Resume (desktop only). None by default. */
  links?: NavLink[]
}

/* Site header on the 6-column page grid. Mobile shows only the logo and Resume link. */
function Header({ links = [] }: HeaderProps) {
  return (
    <header className="grid grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-6 md:items-start">
      <div className="md:col-1">
        <Logo />
      </div>
      <p className="hidden text-body-lg text-neutral-foreground md:col-2 md:block">
        Product Designer at Raffles Connect
      </p>
      <p className="hidden text-body-lg text-neutral-foreground md:col-3 md:block">
        Based in Singapore
      </p>
      <nav className="flex items-center gap-4 md:col-[5/span_2] md:justify-end">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="hidden text-heading-h4-bold text-foreground transition-colors hover:text-primary md:block"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-heading-h4-bold text-foreground transition-colors hover:text-primary"
        >
          Resume
          <span className="icon" aria-hidden="true">
            arrow_outward
          </span>
        </a>
      </nav>
    </header>
  )
}

export default Header
