import React from 'react'
import Icon from './icon'

interface TextButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'> {
  icon: React.Component<typeof Icon>['svg']
}

export default function TextButton({
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  ...props
}): TextButtonProps {
  return (
    <button>
      <Iconon svg={} />
    </button>
  )
}
