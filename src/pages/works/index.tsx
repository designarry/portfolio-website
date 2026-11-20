import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import PageLayout from '../../components/page-layout'
import RichText from '../../components/rich-text'
import { getWorkById, type Work } from '../../data/works'

/* 12-column grid: titles in cols 1–3, content in cols 5–11 */
const contentGrid = 'grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-12'

function Hero({ work }: { work: Work }) {
  const info = [
    { label: 'Role', value: work.role },
    { label: 'Timeline', value: work.timeline },
    { label: 'Scope', value: work.scope },
  ].filter((item) => item.value)

  return (
    <section className={contentGrid}>
      <div className="flex flex-col gap-2 self-start md:col-[1/span_3] md:row-1">
        <p className="flex gap-2 text-body-lg-semibold text-neutral-foreground uppercase">
          <span>{work.clientName}</span>
          <span aria-hidden="true">•</span>
          <span>{work.releasedYear}</span>
        </p>
        <h1 className="text-heading-h1-semibold text-foreground">{work.title}</h1>
      </div>
      <img
        src={work.cover}
        alt=""
        width={600}
        height={403}
        className="aspect-3/2 w-full rounded-xl object-cover md:col-[5/span_7] md:row-[1/span_2]"
      />
      {info.length > 0 && (
        <dl className="flex flex-col gap-6 self-end md:col-[1/span_3] md:row-2">
          {info.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="text-label-lg text-neutral-foreground uppercase">{item.label}</dt>
              <dd className="text-body-lg text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  )
}

interface StorySectionProps {
  title: string
  subtitle: string
  text: string
}

function StorySection({ title, subtitle, text }: StorySectionProps) {
  if (!subtitle && !text) return null
  return (
    <section className={contentGrid}>
      <h2 className="self-start text-heading-h2-bold text-foreground md:col-[1/span_3]">{title}</h2>
      <div className="flex flex-col gap-3 md:col-[5/span_7]">
        {subtitle && <h3 className="text-heading-h3-semibold text-foreground">{subtitle}</h3>}
        {text && <RichText text={text} className="text-body-lg text-foreground" />}
      </div>
    </section>
  )
}

function NotFound() {
  return (
    <section className="flex flex-col items-start gap-4">
      <h1 className="text-heading-h1-semibold text-foreground">Work not found</h1>
      <p className="text-body-lg text-neutral-foreground">
        This project doesn’t exist or may have been moved.
      </p>
      <Link
        to="/#works"
        className="text-heading-h4-bold text-secondary-foreground transition-colors hover:text-primary-hovered"
      >
        See all works
      </Link>
    </section>
  )
}

function WorkDetail() {
  const { id } = useParams()
  const work = getWorkById(Number(id))

  return (
    <PageLayout gap="gap-24">
      <Header />
      {work ? (
        <>
          <Hero work={work} />
          <StorySection
            title="How It Started"
            subtitle={work.backgroundSubtitle}
            text={work.backgroundText}
          />
          <StorySection title="Problem" subtitle={work.problemSubtitle} text={work.problemText} />
          <StorySection title="Goal & Objective" subtitle={work.goalSubtitle} text={work.goalText} />
          <StorySection
            title="Solution"
            subtitle={work.solutionSubtitle}
            text={work.solutionText}
          />
          <StorySection title="Impact" subtitle={work.impactSubtitle} text={work.impactText} />
        </>
      ) : (
        <NotFound />
      )}
      <Footer />
    </PageLayout>
  )
}

export default WorkDetail
