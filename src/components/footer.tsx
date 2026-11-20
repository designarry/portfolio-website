const socialLinks = [
  { label: 'Linkedin', href: '#' },
  { label: 'Instagram', href: '#' },
]

const contactEmail = 'hello@antsindhu.com'

/* Site footer on the 6-column page grid (matches the Header component). */
function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-4 md:grid-cols-6 md:items-end">
      <h2 className="text-heading-h2-bold text-foreground md:col-1">Let’s connect</h2>
      <a
        href={`mailto:${contactEmail}`}
        className="justify-self-start text-heading-h2-bold whitespace-nowrap text-secondary-foreground transition-colors hover:text-primary-hovered md:col-2"
      >
        {contactEmail}
      </a>
      <nav className="flex flex-wrap items-center gap-4 md:col-[5/span_2] md:justify-end">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-heading-h4-bold whitespace-nowrap text-neutral-foreground transition-colors hover:text-primary"
          >
            {link.label}
            <span className="icon" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
