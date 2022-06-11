import Link from 'next/link'
import React from 'react'

type Props = {
  pri: 'primary' | 'secondary'
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
  pri: 'primary' | 'secondary'
  logo?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ButtonLink = ({
  logo = false,
  className,
  href,
  ...props
}: LinkProps) => {
  return (
    <Link href={href}>
      <a
        {...props}
        className={`${className} bg-online-blue-500 text-zinc-100 px-4 py-2 rounded shadow-md cursor-pointer`}
      />
    </Link>
  )
}

export default Button
