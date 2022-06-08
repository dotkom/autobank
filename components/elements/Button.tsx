import React from 'react'

type Props = {
  logo?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ logo = false, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${className} bg-online-blue-500 text-zinc-100 px-4 py-px rounded shadow-md cursor-pointer`}
    />
  )
}

type LinkProps = {
  logo?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ButtonLink = ({
  logo = false,
  className,
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={`${className} bg-online-blue-500 text-zinc-100 px-4 py-px rounded shadow-md cursor-pointer`}
    />
  )
}

export default Button
