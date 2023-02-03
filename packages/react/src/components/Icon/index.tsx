import React from 'react'
import { IconSVG } from './style'
import { icons } from '@bet-kit-ui/tokens'

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name?: keyof typeof icons
  size?: 'sm' | 'md' | 'lg'
}

export function Icon({ name, size, ...props }: IconProps) {
  if (!name) return null

  return <IconSVG name={name} size={size} {...props} />
}

Icon.displayName = 'Icon'
