import { Link } from 'react-router-dom'
import PageLayout from '../../components/page-layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { works } from '../../data/works'
import { about, hero, publications, skills } from '../../data/home'

/* 12-column grid used by the content sections: title in cols 1–2, content in cols 3–11 */
const contentGrid = 'grid grid-cols-1 gap-4 md:grid-cols-12'
const contentSpan = 'md:col-[3/span_9]'

function Hero() {
  return (
    <section className={`${contentGrid} gap-y-8`}>
      <h1 className={`text-display-sm text-foreground ${contentSpan}`}>
        {hero.headline}
      </h1>
      <ul className={`grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-9 ${contentSpan}`}>
        {hero.highlights.map((item) => (
          <li key={item.value} className="flex flex-col gap-2 sm:col-span-3">
            <span className="text-heading-h2-semibold text-foreground">{item.value}</span>
            <span className="text-body-lg text-neutral-foreground">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="self-start text-heading-h2-bold text-foreground md:col-[1/span_2]">
      {children}
    </h2>
  )
}

function Works() {
  return (
    <section id="works" className={contentGrid}>
      <SectionTitle>Works</SectionTitle>
      <ul className={`grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-9 ${contentSpan}`}>
        {works.map((work) => (
          <li key={work.id} className="md:col-span-3">
            <Link to={`/works/${work.id}`} className="group flex flex-col gap-4">
              <span className="overflow-hidden rounded-xl">
                <img
                  src={work.cover}
                  alt=""
                  width={600}
                  height={403}
                  className="aspect-3/2 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <span className="flex flex-col gap-1">
                <h3 className="text-heading-h3-semibold text-foreground transition-colors group-hover:text-primary">
                  {work.title}
                </h3>
                <span className="flex gap-2 text-heading-h5 text-neutral-foreground uppercase">
                  <span>{work.clientName}</span>
                  <span aria-hidden="true">•</span>
                  <span>{work.releasedYear}</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className={contentGrid}>
      <SectionTitle>Skills</SectionTitle>
      <ul className={`flex flex-col gap-4 ${contentSpan}`}>
        {skills.map((skill) => (
          <li
            key={skill.title}
            className="grid grid-cols-3 gap-x-4 gap-y-4 border-b border-input-border-strong pb-6 last:border-b-0 sm:grid-cols-9 sm:gap-y-0.5"
          >
            <h3 className="col-span-3 text-heading-h3-semibold text-foreground sm:col-[1/span_6] sm:row-1">
              {skill.title}
            </h3>
            <p className="col-span-3 text-heading-h4 text-neutral-foreground sm:col-[1/span_6] sm:row-2">
              {skill.items.join(' • ')}
            </p>
            {skill.logos.map((logo, i) => (
              <img
                key={logo}
                src={logo}
                alt=""
                width={750}
                height={562}
                className={`aspect-4/3 w-full rounded-lg object-cover sm:row-[1/span_2] sm:aspect-auto sm:h-full ${
                  ['sm:col-7', 'sm:col-8', 'sm:col-9'][i]
                }`}
              />
            ))}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Publications() {
  return (
    <section id="publication" className={contentGrid}>
      <SectionTitle>Publication</SectionTitle>
      <ul className={`flex flex-col gap-6 ${contentSpan}`}>
        {publications.map((pub) => (
          <li
            key={pub.id}
            className="grid grid-cols-6 gap-x-4 gap-y-2 border-b border-input-border-strong pb-6 last:border-b-0 md:grid-cols-9 md:gap-y-4"
          >
            {/* Mobile: date on row 1; title (4 col) + publisher (2 col) on row 2 */}
            <span className="col-span-6 text-heading-h4 text-neutral-foreground md:col-[1/span_2]">
              {pub.publishedDate}
            </span>
            <a
              href={pub.url}
              target="_blank"
              rel="noreferrer"
              className="col-span-4 min-w-0 truncate text-heading-h4-bold text-foreground transition-colors hover:text-primary md:col-[3/span_6]"
            >
              {pub.title}
            </a>
            <span className="col-span-2 text-right text-heading-h4 whitespace-nowrap text-neutral-foreground md:col-9">
              {pub.publisher}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function About() {
  return (
    <section id="about" className={contentGrid}>
      <SectionTitle>About</SectionTitle>
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-9 ${contentSpan}`}>
        <img
          src={about.avatar}
          alt={about.avatarAlt}
          width={83}
          height={83}
          className="size-20.75 self-end object-cover md:col-1 md:row-1"
        />
        <p className="self-end text-heading-h2-semibold text-foreground md:col-[1/span_4] md:row-2">
          {about.intro}
        </p>
        <div className="flex flex-col gap-6 self-start text-body-lg text-neutral-foreground md:col-[5/span_5] md:row-[1/span_2]">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <PageLayout gap="gap-32">
      <Header />
      <Hero />
      <Works />
      <Skills />
      <Publications />
      <About />
      <Footer />
    </PageLayout>
  )
}

export default Home
