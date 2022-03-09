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
      } px-4 py-px rounded shadow-md`}
    />
  )
}

type LinkProps = {
  pri: 'primary' | 'secondary'
  logo?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ButtonLink = ({
  pri,
  logo = false,
  className,
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={`${className} ${
        pri == 'primary'
          ? 'bg-online-blue-500 text-zinc-100'
          : 'bg-online-blue-500 text-zinc-100'
      } px-4 py-px rounded shadow-md cursor-pointer`}
    />
  )
}

export default Button
