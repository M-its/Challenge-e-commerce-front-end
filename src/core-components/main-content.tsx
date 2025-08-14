import { cx } from 'class-variance-authority'

type MainContentProps = React.ComponentProps<'main'>

export default function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  return (
    <main className={cx('', className)} {...props}>
      {children}
    </main>
  )
}
