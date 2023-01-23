import React from 'react'

export default function useScrollY() {
  const [scroll, setScroll] = React.useState(0)
  const [scrollDirection, setScrollDirection] = React.useState<'top' | 'bottom'>()

  React.useEffect(() => {
    const interval = setInterval(() => {
      const { scrollY } = window
      setScroll((s) => {
        if (s !== scrollY) {
          if (scrollY > s) {
            setScrollDirection('top')
          } else {
            setScrollDirection('bottom')
          }
          return scrollY
        }
        return s
      })
    }, 1)
    return () => clearInterval(interval)
  })

  return { scroll, scrollDirection }
}
