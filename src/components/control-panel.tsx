import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const THEME_KEY = 'theme'

/* Saved choice, otherwise the OS preference on first visit */
function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* storage unavailable — fall back to the OS preference */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/* Applies the .dark class to <html>; only an explicit choice is persisted */
function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const chooseTheme = (next: Theme) => {
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      /* ignore */
    }
    setTheme(next)
  }

  return [theme, chooseTheme] as const
}

function PanelButton({
  label,
  icon,
  pressed,
  onClick,
}: {
  label: string
  icon: string
  pressed: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className={`cursor-pointer rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
        pressed ? 'text-foreground' : 'text-muted-foreground hover:text-neutral-foreground'
      }`}
    >
      {/* Material Symbol: filled when active, outlined when inactive */}
      <span aria-hidden="true" className={`icon block ${pressed ? 'icon-filled' : ''}`}>
        {icon}
      </span>
    </button>
  )
}

const panelGroup =
  'flex w-[42px] flex-col gap-2 rounded-full border border-border bg-card p-2 shadow-2'

const themeOptions: { value: Theme; label: string; icon: string }[] = [
  { value: 'light', label: 'Light theme', icon: 'light_mode' },
  { value: 'dark', label: 'Dark theme', icon: 'dark_mode' },
]

function ControlPanel({
  showGrid,
  onShowGridChange,
}: {
  showGrid: boolean
  onShowGridChange: (show: boolean) => void
}) {
  const [theme, setTheme] = useTheme()

  return (
    /* Fixed track mirroring the page's 12-column grid (see BackgroundGrid);
       the panel is vertically centred in the viewport, in the last column */
    <div className="pointer-events-none fixed inset-x-0 top-1/2 z-50 -translate-y-1/2 mx-auto grid max-w-296 grid-cols-12 gap-4 px-4 max-md:hidden xl:px-0">
      <aside
        aria-label="Display settings"
        className="pointer-events-auto col-start-12 flex flex-col gap-2 justify-self-center"
      >
        <div role="group" aria-label="Theme" className={panelGroup}>
          {themeOptions.map((option) => (
            <PanelButton
              key={option.value}
              label={option.label}
              icon={option.icon}
              pressed={theme === option.value}
              onClick={() => setTheme(option.value)}
            />
          ))}
        </div>
        <div role="group" aria-label="Layout grid" className={panelGroup}>
          <PanelButton
            label="Show grid"
            icon="calendar_view_week"
            pressed={showGrid}
            onClick={() => onShowGridChange(true)}
          />
          <PanelButton
            label="Hide grid"
            icon="crop_landscape"
            pressed={!showGrid}
            onClick={() => onShowGridChange(false)}
          />
        </div>
      </aside>
    </div>
  )
}

export default ControlPanel
