import { ButtonHTMLAttributes } from "react"

export default function PrimaryButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { children, ...rest } = props
  return (
    <button {...rest} className="primaryButton">
      {children}
    </button>
  )
}
