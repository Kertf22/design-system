import { IconSVG } from './style'
import { icons } from '@bet-kit-ui/tokens'

export interface IconProps {
  name?: keyof typeof icons
  size?: 'sm' | 'md' | 'lg'
}

export function Icon({ name, size }: IconProps) {
  if (!name) return null

  return <IconSVG name={name} size={size} />
}

Icon.displayName = 'Icon'
