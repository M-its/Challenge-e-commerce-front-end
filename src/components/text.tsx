import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const textVariants = cva('font-sans', {
  variants: {
    variant: {
      'text-xl-bold': 'text-2xl font-semibold', //logo
      'text-lg-bold': 'text-lg font-semibold', // filtros, nome, peso
      'text-md': 'text-base font-normal', // descrição, estabilização
      'text-sm-bold': 'text-xs font-semibold', // status
    },
  },
  defaultVariants: {
    variant: 'text-md',
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}

export default function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  )
}
