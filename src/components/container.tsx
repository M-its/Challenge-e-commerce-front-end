import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

export const containerVariants = cva('mx-auto', {
  variants: {
    size: {
      md: 'max-w-6xl px-6 py-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements
}

export default function Container({
  as = 'div',
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size: 'md', className }),
      ...props,
    },
    children
  )
}
