import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardVariants = cva(
  `
    bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors
    `,
  {
    variants: {
      size: {
        none: '',
        md: 'p-6',
      },
      defaultVariants: {
        size: 'none',
      },
    },
  }
)

interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements
}

export default function Card({
  as = 'div',
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  )
}
