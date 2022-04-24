import Link from 'next/link'
import React from 'react'

type Props = {
  pri: 'primary' | 'secondary'
  logo?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ pri, logo = false, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${className} ${
        pri == 'primary'
          ? 'bg-online-blue-500 text-zinc-100'
          : 'bg-online-blue-500 text-zinc-100'
      } px-4 py-2 rounded shadow-md`}
    />
  )
}

type LinkProps = {
  pri: 'primary' | 'secondary'
  logo?: boolean
  link: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export const ButtonLink = ({
  pri,
  logo = false,
  className,
  link,
  ...props
}: LinkProps) => {
  return (
    <Link href={link}>
      <a
        {...props}
        className={`${className} ${
          pri == 'primary'
            ? 'bg-online-blue-500 text-zinc-100'
            : 'bg-online-blue-500 text-zinc-100'
        } px-4 py-2 rounded shadow-md cursor-pointer`}
      />
    </Link>
  )
}

export default Button
