import React from 'react'

export default function FooterAdmin() {
  return (
    <footer className=" py-4 justify-self-end flex-grow container flex justify-end flex-col h-full mx-auto px-4">
      <hr className="mb-4 border-b-1 border-slate-200" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4">
          <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
            Copyright © {new Date().getFullYear()}{' '}
            <span className="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1">
              Autobank | Online Linjeforening
            </span>
          </div>
        </div>
        <div className="w-full md:w-8/12 px-4">
          <ul className="flex flex-wrap list-none md:justify-end  justify-center">
            <li>
              <a
                href="https://online.ntnu.no/"
                className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
              >
                Online Linjeforening
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dotkom/autobank"
                className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dotkom/autobank"
                className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
              >
                MIT License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
