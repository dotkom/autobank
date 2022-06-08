import React, { Children } from 'react'
import { FaBell, FaUser } from 'react-icons/fa'
import UnopDropdown from 'unop-react-dropdown'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Separator from '../../html/separator'

const Dropdown = ({
  trigger,
  children,
  type,
  userImage,
}: {
  trigger?: JSX.Element
  children?: JSX.Element
  type?: 'user'
  userImage?: string
}) => {
  return (
    <UnopDropdown
      trigger={
        <button className="text-slate-500 rounded-full">
          {trigger ? (
            trigger
          ) : type == 'user' ? (
            <div className="items-center flex w-12 h-12 relative text-sm text-white justify-center rounded-full shadow-xl">
              {userImage ? (
                <Image
                  layout="fill"
                  alt="..."
                  className="rounded-full align-middle border-none  bg-slate-200"
                  src={userImage}
                  objectFit="cover"
                />
              ) : (
                <FaUser />
              )}
            </div>
          ) : (
            <FaBell />
          )}
        </button>
      }
    >
      <div
        className={
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-[8rem]'
        }
      >
        {children ? (
          children
        ) : type == 'user' ? (
          <>
            <Link href="/profile">
              <a
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
                }
                onClick={(e) => e.preventDefault()}
              >
                link x
              </a>
            </Link>
            <Link href="/profile">
              <a
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
                }
                onClick={(e) => e.preventDefault()}
              >
                profile
              </a>
            </Link>
            <Separator />
            <button
              className={
                'text-sm py-2 px-4 font-normal block whitespace-nowrap bg-transparent text-slate-700'
              }
              onClick={(e) => signOut()}
            >
              log ut
            </button>
          </>
        ) : (
          <>
            <a
              href="#pablo"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
              }
              onClick={(e) => e.preventDefault()}
            >
              Action
            </a>
            <a
              href="#pablo"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
              }
              onClick={(e) => e.preventDefault()}
            >
              Another action
            </a>
            <a
              href="#pablo"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
              }
              onClick={(e) => e.preventDefault()}
            >
              Something else here
            </a>
            <Separator />
            <a
              href="#pablo"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
              }
              onClick={(e) => e.preventDefault()}
            >
              Seprated link
            </a>
          </>
        )}
      </div>
    </UnopDropdown>
  )
}

export default Dropdown
