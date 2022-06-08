import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { OnlineBankom } from '../../icons/Online'
import { FaBars, FaEarlybirds, FaTimes, FaTv } from 'react-icons/fa'
import { MdDashboard, MdOutlineEmail, MdSettings } from 'react-icons/md'
import Dropdown from '../../elements/Dropdown'
import { useSession } from 'next-auth/react'
import { IconType } from 'react-icons'

export default function Sidebar() {
  const { data: session } = useSession()
  const [collapseShow, setCollapseShow] = React.useState('hidden')
  const router = useRouter()
  console.log(router.pathname)

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 p-2 md:py-4 md:px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
        >
          <FaBars />
        </button>
        {/* Brand */}

        <OnlineBankom className="md:my-5 max-h-8 w-40" />
        {/* User */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            <Dropdown />
          </li>
          <li className="inline-block relative ml-2">
            <Dropdown type="user" userImage={session?.user?.image}></Dropdown>
          </li>
        </ul>
        {/* Collapse */}
        <div
          className={
            'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow('hidden')}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="w-6/12 flex justify-end">
                <OnlineBankom className="md:my-5 max-h-8 w-40" />
              </div>
            </div>
          </div>
          {/* Form */}
          <form className="mt-6 mb-4 md:hidden">
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search"
                className=" px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              />
            </div>
          </form>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          {/* <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Admin Layout Pages
          </h6> */}
          {/* Navigation */}

          <ul className="md:min-w-full flex flex-col list-none">
            <SidebarLink
              active={router.pathname == '/admin'}
              href={'/admin'}
              Icon={MdDashboard}
            >
              hjem
            </SidebarLink>
            <SidebarLink
              active={router.pathname == '/admin/inbox'}
              href={'/admin/inbox'}
              Icon={MdOutlineEmail}
            >
              inboks
            </SidebarLink>
            <SidebarLink
              active={router.pathname == '/admin/settings'}
              href={'/admin/settings'}
              Icon={MdSettings}
            >
              settings
            </SidebarLink>
          </ul>

          <SectionHeader>Kvitteringer</SectionHeader>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <SidebarLink
              active={router.pathname == '/admin/kvitteringer'}
              href={'/admin/kvitteringer'}
            >
              oversikt
            </SidebarLink>
            <SidebarLink
              active={router.pathname == '/admin/kvitteringer/inboks'}
              href={'/admin/kvitteringer/inboks'}
            >
              inboks
            </SidebarLink>
          </ul>

          <SectionHeader>Onlinepotten</SectionHeader>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <SidebarLink
              active={router.pathname == '/admin/onlinepotten'}
              href={'/admin/onlinepotten'}
            >
              oversikt
            </SidebarLink>
            <SidebarLink
              active={router.pathname == '/admin/onlinepotten/inboks'}
              href={'/admin/onlinepotten/inboks'}
            >
              inboks
            </SidebarLink>
          </ul>

          <SectionHeader>Faktura</SectionHeader>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <SidebarLink
              active={router.pathname == '/admin/faktura'}
              href={'/admin/faktura'}
            >
              oversikt
            </SidebarLink>
            <SidebarLink
              active={router.pathname == '/admin/faktura/inboks'}
              href={'/admin/faktura/inboks'}
            >
              inboks
            </SidebarLink>
          </ul>

          <SectionHeader>Fondet</SectionHeader>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <SidebarLink
              active={router.pathname == '/admin/fondet'}
              href={'/admin/fondet'}
            >
              oversikt
            </SidebarLink>
            <SidebarLink
              active={router.pathname == '/admin/fondet/inboks'}
              href={'/admin/fondet/inboks'}
            >
              inboks
            </SidebarLink>
          </ul>

          <SectionHeader>FAQ</SectionHeader>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <SidebarLink
              active={router.pathname == '/admin/faq'}
              href={'/admin/faq'}
            >
              oversikt
            </SidebarLink>
            <SidebarLink
              active={router.pathname == '/admin/faq/inboks'}
              href={'/admin/faq/inboks'}
            >
              inboks
            </SidebarLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export const SidebarLink = ({
  active,
  href,
  children,
  Icon,
}: {
  active: boolean
  href: string
  children?: JSX.Element | string
  Icon?: IconType
}) => {
  return (
    <li className="items-center">
      <Link href={href}>
        <a>
          <div
            className={
              'text-xs uppercase py-3 font-bold flex ' +
              (active
                ? 'text-online-blue-500 hover:text-online-blue-600'
                : 'text-slate-700 hover:text-slate-500')
            }
          >
            {Icon ? (
              <>
                <Icon
                  className={
                    'mr-2 text-sm ' + (active ? 'opacity-75' : 'text-slate-300')
                  }
                />{' '}
              </>
            ) : (
              ''
            )}
            {children}
          </div>
        </a>
      </Link>
    </li>
  )
}

export const SectionHeader = ({
  children,
}: {
  children: JSX.Element | string
}) => {
  return (
    <>
      {/* Divider */}
      <hr className="my-4 md:min-w-full" />
      {/* Heading */}
      <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
        {children}
      </h6>
      {/* Navigation */}
    </>
  )
}
