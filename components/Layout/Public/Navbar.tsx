import { motion, useCycle, Variants } from 'framer-motion'
import { MenuIcon } from '../../icons/MenuIcon'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { OnlineBankom } from '../../icons/Online'
import { ButtonLink } from '../../html/Button'
import { useSession } from 'next-auth/react'
import Dropdown from 'components/elements/Dropdown'
import { FaUser } from 'react-icons/fa'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 50,
}

export const Item = ({
  link,
  text,
  button = false,
}: {
  link: string
  text: React.ReactNode
  button?: boolean
}) => {
  return (
    <motion.li className="mt-10 md:mt-0 md:ml-6">
      {button ? (
        <ButtonLink href={link}>{text}</ButtonLink>
      ) : (
        <Link href={link}>
          <a>{text}</a>
        </Link>
      )}
    </motion.li>
  )
}

export const ItemList = ({
  variants,
  toggle = () => {},
  className,
}: {
  toggle?: (i?: number | undefined) => void
  variants?: Variants
  className?: string
}) => {
  const { data: session, status } = useSession()
  return (
    <motion.ul
      variants={variants}
      className={className}
      transition={spring}
      onClick={() => {
        toggle()
      }}
    >
      <Item link={'/fondet'} text={'Fondet'} />
      <Item link={'/onlinepotten'} text={'Onlinepotten'} />
      <Item link={'/kvittering'} text={'Kvitteringer'} />
      <Item link={'/faktura'} text={'Faktura'} />
      <Item link={'/faq'} text={'FAQ'} />
      {status == 'authenticated' && session.user.role != 'USER' ? (
        <Item link={'/admin'} text={'Dashboard'} />
      ) : (
        ''
      )}
      {status == 'authenticated' ? (
        <Dropdown
          type="user"
          trigger={
            <div className=" ml-5 items-center flex w-10 h-10 relative text-sm text-white justify-center rounded-full shadow-xl">
              {session?.user?.image ? (
                <Image
                  layout="fill"
                  alt="..."
                  className="rounded-full align-middle border-none  bg-slate-200"
                  src={session?.user?.image}
                  objectFit="cover"
                />
              ) : (
                <FaUser />
              )}
            </div>
          }
        />
      ) : (
        <Item link={'/auth/signin'} text={'Login'} button />
      )}
    </motion.ul>
  )
}

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  useEffect(
    function mount() {
      window.onresize = () => {
        if (isOpen) toggleOpen()
      }
    },
    [isOpen, toggleOpen]
  )

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className="max-w-7xl flex justify-between items-center h-16 mx-auto z-40 text-online-blue-500"
      layout
    >
      <Link href={'/'}>
        <a className="ml-4">
          <OnlineBankom className="h-6" />
        </a>
      </Link>
      <ItemList
        className="text-xl md:!hidden absolute w-screen flex flex-col items-center h-screen mt-16"
        variants={{
          closed: {
            x: 0,
            y: '-100vh',
            background: 'transparent',
            zIndex: 49,
          },
          open: {
            x: 0,
            y: '50vh',
            background: 'white',
            zIndex: 49,
          },
        }}
        toggle={() => toggleOpen()}
      />
      <ItemList className="hidden md:flex items-center p-3 mr-3 z-50" />
      <MenuIcon
        toggle={() => toggleOpen()}
        className="h-full w-auto md:hidden p-4 z-50 mr-3"
      />
    </motion.nav>
  )
}

export default Nav
