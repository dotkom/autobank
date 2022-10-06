import React from 'react'
import CardBarChart from 'src/components/elements/Cards/CardBarChart'
import CardPageVisits from 'src/components/elements/Cards/CardPageVisits'
import CardSocialTraffic from 'src/components/elements/Cards/CardSocialTraffic'
import Admin from 'src/components/Layout/Admin'
import { authenticate } from 'src/lib/auth'
import Table from 'src/components/elements/application/ApplicationTable'

export default function Inbox() {
  return (
    <Admin>
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="w-full xl:col-span-2 row-span-2 mb-12 xl:mb-0 px-4">
          <Table />
        </div>
        <div className="w-full  px-4">
          <CardBarChart />
        </div>
        <div className="w-full  px-4">
          <CardBarChart />
        </div>
      </div>
    </Admin>
  )
}

export async function getServerSideProps(context) {
  return authenticate(context, true)
}
