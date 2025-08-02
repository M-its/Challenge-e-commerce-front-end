import React from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import Icon from './icon'
import { textVariants } from './text'

export const inputTextVariants = cva(
  `
     bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition
`,
  {
    variants: {
      size: {
        lg: 'pl-10 pr-4 py-3 w-full',
      },
      disabled: {
        true: 'pointer-events-none opacity-60',
      },
    },
    defaultVariants: {
      size: 'lg',
      disabled: false,
    },
  }
)

export const buttonIconVariants = cva(
  'absolute left-3 top-1/2 -translate-y-1/2',
  {
    variants: {
      variant: {
        primary: 'text-base font-normal fill-slate-500',
      },
      size: {
        md: 'w-5 h-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {
  icon?: React.ComponentProps<typeof Icon>['svg']
}

export default function InputText({
  size,
  disabled,
  icon: IconComponent,
  className,
  ...props
}: InputTextProps) {
  return (
    <div className="relative w-full">
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants()}
          aria-hidden
        />
      )}

      <input
        className={cx(
          inputTextVariants({ size, disabled }),
          textVariants({ variant: 'text-md' }),
          className
        )}
        disabled={disabled ?? undefined}
        {...props}
      />
    </div>
  )
}
