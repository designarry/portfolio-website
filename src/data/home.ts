import skillBrand1 from '../assets/skills/brand-1.png'
import skillBrand2 from '../assets/skills/brand-2.png'
import skillBrand3 from '../assets/skills/brand-3.png'
import skillProduct1 from '../assets/skills/product-1.png'
import skillProduct2 from '../assets/skills/product-2.png'
import skillProduct3 from '../assets/skills/product-3.png'
import skillWeb1 from '../assets/skills/web-1.png'
import skillWeb2 from '../assets/skills/web-2.png'
import skillWeb3 from '../assets/skills/web-3.png'
import aboutAvatar from '../assets/about/avatar.png'

/* Home page copy. Works live in ./works.ts so the detail page can share them. */

export interface Highlight {
  value: string
  text: string
}

export interface Hero {
  headline: string
  highlights: Highlight[]
}

export const hero: Hero = {
  headline: 'I work at the intersection of brand, user interface and web development',
  highlights: [
    { value: '17+ yrs', text: 'Experience across brand and UI/UX design.' },
    { value: '8+ yrs', text: 'Building B2B and B2C products across healthcare and finance.' },
    { value: '20+', text: 'Designers mentored and led throughout my career.' },
  ],
}

export interface Skill {
  title: string
  items: string[]
  logos: [string, string, string]
}

export const skills: Skill[] = [
  {
    title: 'Brand Design',
    items: ['Brand Identity', 'Art Direction', 'Packaging', 'Website'],
    logos: [skillBrand1, skillBrand2, skillBrand3],
  },
  {
    title: 'Product Design',
    items: ['User Interface', 'User Experience', 'Information Architecture', 'User Research'],
    logos: [skillProduct1, skillProduct2, skillProduct3],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'Wordpress', 'Woocommerce', 'Webflow', 'Framer'],
    logos: [skillWeb1, skillWeb2, skillWeb3],
  },
]

export interface Publication {
  id: number
  publishedDate: string
  title: string
  publisher: string
  url: string
}

export const publications: Publication[] = [
  {
    id: 1,
    publishedDate: 'Mar 4, 2026',
    title: 'Why Digibank’s Services Page Fails Me',
    publisher: 'Linkedin',
    url: 'https://www.linkedin.com/',
  },
  {
    id: 2,
    publishedDate: 'Jan 29, 2026',
    title: 'The Hidden Psychology Behind a Flight Booking Experience',
    publisher: 'Linkedin',
    url: 'https://www.linkedin.com/',
  },
  {
    id: 3,
    publishedDate: 'Jun 24, 2025',
    title: 'Why Failure is An Underrated Achievement',
    publisher: 'Medium',
    url: 'https://medium.com/',
  },
  {
    id: 4,
    publishedDate: 'Jun 17, 2025',
    title: 'How to Build AI Prompts That Write and Edit UX Copy Like a Pro',
    publisher: 'Medium',
    url: 'https://medium.com/',
  },
  {
    id: 5,
    publishedDate: 'Feb 20, 2025',
    title: 'Decluttering Design System Like Marie Kondo',
    publisher: 'Medium',
    url: 'https://medium.com/',
  },
]

export interface About {
  avatar: string
  avatarAlt: string
  intro: string
  paragraphs: string[]
}

export const about: About = {
  avatar: aboutAvatar,
  avatarAlt: 'Illustrated portrait of Antonius Sindhu',
  intro: 'I’m a product designer with a background spanning brand, product and systems design.',
  paragraphs: [
    'Over the last eight-plus years I’ve focused mainly on digital products in healthcare and fintech, and today I lead product design work at Raffles Connect, where I work on complex healthcare journeys, design systems and platform-level problems.',
    'Today, most of my work starts before the interface—understanding the business problem, structuring the problem space, aligning stakeholders and deciding what we should solve before the team starts designing.',
  ],
}
