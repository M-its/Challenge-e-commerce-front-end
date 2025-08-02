import React from 'react'
import Text from './text'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import Skeleton from './skeleton'

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        none: '',
        active: 'bg-green-900',
        inactive: 'bg-red-900',
      },
      size: {
        sm: 'py-0.5 px-2',
      },
    },
    defaultVariants: {
      variant: 'active',
      size: 'sm',
    },
  }
)

export const badgeTextVariants = cva('', {
  variants: {
    variant: {
      none: '',
      active: 'text-green-300',
      inactive: 'text-red-300',
    },
  },
  defaultVariants: {
    variant: 'active',
  },
})

export const badgeSkeletonVariants = cva('', {
  variants: {
    size: {
      sm: 'w-6 h-6',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

interface BadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {
  loading?: boolean
}

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: 'none' }),
          badgeSkeletonVariants({ size }),
          className
        )}
      />
    )
  }

  return (
    <div className={badgeVariants({ variant, size, className, ...props })}>
      <Text variant="text-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  )
}
