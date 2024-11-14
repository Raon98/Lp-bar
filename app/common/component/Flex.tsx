'use client'

interface FlexProps {
  children: React.ReactNode
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  gap?: number
  className?: string
}

export default function Flex({
  children,
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap= 0,
  className = '',
}: FlexProps) {
  const directionClass = direction ? `flex-${direction}` : ''
  const justifyClass = justify ? `justify-${justify}` : ''
  const alignClass = align ? `items-${align}` : ''
  const gapClass = gap ? `gap-${gap}` : 0

  return (
    <div
      className={`flex ${directionClass} ${justifyClass} ${alignClass} ${gapClass} ${className}`}
    >
      {children}
    </div>
  )
}
