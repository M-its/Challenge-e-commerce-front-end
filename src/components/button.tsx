import React from 'react'
import Icon from './icon'
import { cva, type VariantProps } from 'class-variance-authority'
import Text from './text'

export const buttonVariants = cva(
  `
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
    `,
  {
    variants: {
      variant: {
        primary: 'bg-blue-700 hover:bg-blue-600',
      },
      size: {
        md: 'h-14 py-5 px-5',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  }
)

export const buttonIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-slate-200',
    },
    size: {
      md: 'w-5 h-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg']
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        className,
      })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text className="text-slate-200" variant="text-lg-bold">
        {children}
      </Text>
    </button>
  )
}
