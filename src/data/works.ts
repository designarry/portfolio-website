import coverContinuousCare from '../assets/works/continuous-care.png'
import coverAppNavigation from '../assets/works/app-navigation.png'
import coverDesignSystem from '../assets/works/design-system.png'
import coverUnderusedFeature from '../assets/works/underused-feature.png'
import coverUnfamiliar from '../assets/works/unfamiliar.png'

export interface Work {
  id: number
  clientName: string
  releasedYear: number
  title: string
  cover: string
  /* Case-study copy. The *Text fields support light formatting — see components/rich-text.tsx */
  role: string
  timeline: string
  scope: string
  backgroundSubtitle: string
  backgroundText: string
  problemSubtitle: string
  problemText: string
  goalSubtitle: string
  goalText: string
  solutionSubtitle: string
  solutionText: string
  impactSubtitle: string
  impactText: string
}

export const works: Work[] = [
  {
    id: 1,
    clientName: 'Raffles Medical',
    releasedYear: 2026,
    title: 'Unified Fragmented Platform for Continuous Care Delivery',
    cover: coverContinuousCare,
    role: 'Lead Product Designer',
    timeline: '12 Weeks',
    scope: 'Product Discovery, Concept Validation',
    backgroundSubtitle: 'Shifting from episodic treatment to preventive care',
    backgroundText:
      'Raffles Medical Group is moving towards prevention-first healthcare through its Healthy & Longevity Clinic. To support this transition, Care aims to evolve Raffles Connect into an integrated platform that enables proactive, personalised, and continuous health management.',
    problemSubtitle: 'Fragmented systems disrupt care continuity',
    problemText: `Our field observations and stakeholder interviews revealed two critical challenges:

**Healthcare Providers**
- **Fragmented workflows:** Switching between disconnected systems creates repetitive administrative work.
- **Disconnected records:** Scattered clinical information makes it difficult to track patient histories and health trends.

**Patients**
- **Limited health visibility:** Isolated medical records prevent patients from understanding their overall health.
- **Lack of actionable insights:** Complex health information makes it difficult to take meaningful preventive action.`,
    goalSubtitle: 'Connecting people, processes, and health data',
    goalText: `Build a unified healthcare ecosystem that enables continuous care through three key objectives:

1. **Streamline Clinic Operations**
   Reduce administrative effort and improve coordination through real-time visibility into patient journeys.
2. **Improve Clinical Decision-Making**
   Provide practitioners with consolidated patient histories and longitudinal health insights.
3. **Empower Patient Engagement**
   Translate complex health data into meaningful insights and actionable preventive guidance.`,
    solutionSubtitle: 'Building a connected healthcare experience',
    solutionText: `1. **Identifying High-Impact Opportunities**
   Mapped the clinic's service blueprint to uncover workflow gaps and prioritise opportunities across clinic operations, healthcare practitioners, and patients.
2. **Establishing a Unified Data Foundation**
   Initiated an integrated data structure connecting administrative records, clinical information, and longitudinal health histories to support continuity across care journeys.
3. **Accelerating Validation with AI**
   Leveraged generative AI to transform user stories and data models into interactive prototypes, enabling stakeholder feedback and iteration in hours rather than weeks.
4. **Designing Three Connected Experiences**
   - **Clinic Orchestration:** Centralised patient flow, appointment coordination, and operational visibility.
   - **Practitioner Dashboard:** Unified patient histories, clinical insights, and longitudinal health trends.
   - **Patient App:** Clear health insights, progress tracking, and personalised preventive guidance.`,
    impactSubtitle: 'Validating a foundation for continuous care',
    impactText: `Within 12 weeks, we translated a complex healthcare strategy into a unified product direction, supported by interactive prototypes and positive stakeholder feedback.

> **"So far, this is a significantly better solution compared to what other providers offer."**
> Dr Samuel — Clinician

> **"When can we start using it? Can we launch next month?"**
> Jennifer — Assistant Operations Manager

> **"Finally I can easily track my progress over time instead of trying to decipher multiple reports."**
> Rachel — Raffles Connect User`,
  },
  {
    id: 2,
    clientName: 'Raffles Connect',
    releasedYear: 2025,
    title: 'Redesigned App for Better Navigation and Conversion',
    cover: coverAppNavigation,
    role: 'Lead Product Designer',
    timeline: '6 months (Design & Development)',
    scope: 'Information Architecture, Visual Identity, Product Optimisation',
    backgroundSubtitle: 'Scaling services without scaling complexity',
    backgroundText:
      'Raffles Connect evolved from a teleconsultation app into a comprehensive health and wellness platform. However, its information architecture struggled to keep pace with the growing number of services, resulting in increasingly complex navigation and information overload.',
    problemSubtitle: 'Information overload obscured essential tasks',
    problemText: `User research and behavioural analytics revealed two critical usability problems.

- **Low-Value Content Competed with Essential Services**
  Promotional banners, health content, and secondary features crowded the home screen, despite core service categories accounting for 67% of all home screen interactions.
- **Important Features Were Buried in Navigation**
  79% of users entering the Records tab were looking for medical records, yet accessing them required additional navigation through less relevant content.`,
    goalSubtitle: 'Prioritise what matters, simplify what doesn’t',
    goalText: `Transform Raffles Connect into a task-focused experience that helps users find and access essential healthcare services through three objectives:

1. **Improve Discoverability**
   Prioritise frequently used services and high-value tasks based on user behaviour.
2. **Simplify Navigation**
   Reduce unnecessary steps and organise information around user intent.
3. **Reduce Cognitive Load**
   Establish a clearer content hierarchy and minimise distractions from secondary features.`,
    solutionSubtitle: 'Redesigning around user priorities',
    solutionText: `1. **Restructuring Information Architecture**
   Analysed heatmaps and engagement data to identify primary user goals, reorganise navigation, and prioritise high-value services over low-engagement content.
2. **Refreshing the Visual Language**
   Introduced a bolder colour palette, approachable illustrations, and warmer imagery to strengthen brand identity while improving visual hierarchy and clarity.
3. **Validating Through Usability Testing**
   Tested the initial design to uncover usability issues. Participants struggled to discover the "View all services" action and understand the consultation method toggle, highlighting areas requiring further refinement.

### Key Design Trade-offs
- **Marketing Visibility vs. User Focus**
  Deprioritised promotional banners while introducing a subtle welcome banner to retain campaign visibility without distracting from core tasks.
- **New Experience vs. User Familiarity**
  Introduced a guided tutorial to help existing users adapt to the redesigned navigation while maintaining familiarity with essential workflows.`,
    impactSubtitle: 'Increasing the share of first-ever actions on core services',
    impactText: `Comparing six months before and after the redesign, the share of first-ever actions attributed to three essential healthcare services increased.

| First-ever action | Before | After | Change |
| --- | --- | --- | --- |
| Medical Records | 9% (2,472) | 18% (2,662) | **+9 pp** |
| GP Teleconsultation | 14% (3,888) | 24% (3,528) | **+10 pp** |
| GP eQueue | 6% (1,693) | 12% (1,686) | **+6 pp** |

Data: Six months before vs. six months after redesign. Changes are in percentage points (pp).

The results indicate a greater concentration of first-ever actions on core healthcare services, although absolute action counts did not increase across all three services.

### Key Takeaway
Improving user experience isn’t always about adding features. By reducing distractions, prioritising user needs, and simplifying navigation, we created a more focused healthcare experience that better supports essential tasks.`,
  },
  {
    id: 3,
    clientName: 'Raffles Connect',
    releasedYear: 2024,
    title: 'Design System Rebuilt for Accessibility & Consistency',
    cover: coverDesignSystem,
    role: '',
    timeline: '',
    scope: '',
    backgroundSubtitle: '',
    backgroundText: '',
    problemSubtitle: '',
    problemText: '',
    goalSubtitle: '',
    goalText: '',
    solutionSubtitle: '',
    solutionText: '',
    impactSubtitle: '',
    impactText: '',
  },
  {
    id: 4,
    clientName: 'Alodokter',
    releasedYear: 2021,
    title: 'Turned Underused Feature to Unmissable',
    cover: coverUnderusedFeature,
    role: '',
    timeline: '',
    scope: '',
    backgroundSubtitle: '',
    backgroundText: '',
    problemSubtitle: '',
    problemText: '',
    goalSubtitle: '',
    goalText: '',
    solutionSubtitle: '',
    solutionText: '',
    impactSubtitle: '',
    impactText: '',
  },
  {
    id: 5,
    clientName: 'Sofi',
    releasedYear: 2018,
    title: 'Designing for the Unfamiliar',
    cover: coverUnfamiliar,
    role: '',
    timeline: '',
    scope: '',
    backgroundSubtitle: '',
    backgroundText: '',
    problemSubtitle: '',
    problemText: '',
    goalSubtitle: '',
    goalText: '',
    solutionSubtitle: '',
    solutionText: '',
    impactSubtitle: '',
    impactText: '',
  },
]

export function getWorkById(id: number): Work | undefined {
  return works.find((work) => work.id === id)
}
