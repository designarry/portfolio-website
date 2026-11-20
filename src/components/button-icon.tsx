import type { ButtonHTMLAttributes } from 'react'

/* Omni Design System — Button Icon.
   States map to native interaction: hovered → :hover, pressed → :active,
   focused → :focus-visible, disabled → [disabled]. */

export type ButtonIconSize = 'sm' | 'md' | 'lg'

const sizeClasses: Record<ButtonIconSize, string> = {
  sm: 'size-8 p-1', // fixed 32×32
  md: 'p-2', // 8px padding → 38×38
  lg: 'p-3', // 12px padding → 46×46
}

interface ButtonIconProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Material Symbols icon name, e.g. "add" */
  icon: string
  /** Accessible name — required since the button has no visible text */
  label: string
  size?: ButtonIconSize
}

function ButtonIcon({
  icon,
  label,
  size = 'md',
  type = 'button',
  className = '',
  ...props
}: ButtonIconProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm border border-border bg-secondary text-secondary-foreground transition-colors hover:bg-secondary-hovered focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-secondary-pressed disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span aria-hidden="true" className="icon icon-20">
        {icon}
      </span>
    </button>
  )
}

export default ButtonIcon
