import { IconContainer, IconSVG } from './style'
import { icons } from '@bet-kit-ui/tokens'

export interface IconProps {
  name?: keyof typeof icons
}

export function Icon({ name }: IconProps) {
  if (!name) return null

  return (
    <IconContainer>
      <IconSVG name={name} />
    </IconContainer>
  )
}

Icon.displayName = 'Icon'
