import Image from 'next/image'
import React from 'react'
import { FaCircle, FaUser } from 'react-icons/fa'
import Card from '../Cards/Card'

import Dropdown from '../Dropdown'

type applicationRow = {
  occasion: string
  image?: string
  name: string
  amount: number
  amountUnit: 'NOK' | 'USD'
  status: string
  responsible_committee: string
}

type applicationTableProps = {
  headings: string[]
  rows: applicationRow[]
}

const ApplicationTable = ({ headings, rows }: applicationTableProps) => {
  return (
    <Card title="Inbox">
      {/* Projects table */}
      <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            {headings &&
              headings.map((heading, i) => (
                <th
                  key={i}
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    'bg-slate-50 text-slate-500 border-slate-100'
                  }
                >
                  {heading}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row, i) => (
              <tr key={i}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  {row.image ? (
                    <div className="relative h-12 w-12 bg-white rounded-full border">
                      <Image src={row.image} alt="..." layout="fill" />
                    </div>
                  ) : (
                    <FaUser />
                  )}
                  {row.name && (
                    <span className={'ml-3 font-bold text-slate-600'}>
                      {row.name}
                    </span>
                  )}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {row.name && row.name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {row.amount &&
                    row.amountUnit &&
                    `${row.amount} ${row.amountUnit}`}
                </td>
                <td className="flex items-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <FaCircle className=" text-orange-500 mr-2" /> {row.status}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {row.responsible_committee}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <Dropdown />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  )
}

export default ApplicationTable
