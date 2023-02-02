import { ComponentProps } from '@stitches/react'
import { AvatarContainer, AvatarFallBack, AvatarImage } from './style'
import { User } from 'phosphor-react'
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallBack delayMs={100}>
        <User />
      </AvatarFallBack>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
