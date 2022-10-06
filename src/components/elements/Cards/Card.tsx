import React from 'react'

type cardProps = {
  children: JSX.Element | JSX.Element[]
  title: string
}

export default function Card({ children, title }: cardProps) {
  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0 flex flex-wrap items-center relative w-full max-w-full flex-grow flex-1">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={'font-semibold text-lg text-slate-700'}>{title}</h3>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">{children}</div>
      </div>
    </>
  )
}
