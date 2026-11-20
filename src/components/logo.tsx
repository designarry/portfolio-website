import { Link } from 'react-router-dom'
import logoMarkBg from '../assets/logo/mark-bg.svg'
import logoMarkGlyph from '../assets/logo/mark-glyph.svg'
import logoWordmark from '../assets/logo/wordmark.svg'

/* Site logo — mark + wordmark, links back to the home page. */
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Antonius Sindhu — home">
      <span className="relative size-10 shrink-0">
        <img src={logoMarkBg} alt="" width={40} height={40} className="absolute inset-0" />
        <img
          src={logoMarkGlyph}
          alt=""
          width={24}
          height={19.2}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </span>
      <img
        src={logoWordmark}
        alt=""
        width={72.441}
        height={32}
        className="dark:brightness-0 dark:invert"
      />
    </Link>
  )
}

export default Logo
