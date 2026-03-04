import type { ReactNode } from "react"

interface HeadingProps {
  children: ReactNode
}

export function Heading({ children }: HeadingProps) {
  let color = "black"

  if (typeof children === "string") {
    if (children.includes("Lucro")) {
      color = "black"
    } else if (children.includes("Prejuízo")) {
      color = "reed"
    }
  }

  return (
    <h1 style={{ color }}>
      {children}
    </h1>
  )
}