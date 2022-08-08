import React from 'react'
import CardBarChart from 'components/elements/Cards/CardBarChart'
import CardPageVisits from 'components/elements/Cards/CardPageVisits'
import CardSocialTraffic from 'components/elements/Cards/CardSocialTraffic'
import Admin from 'components/Layout/Admin'
import { authenticate } from 'lib/auth'
import Table from 'components/elements/application/ApplicationTable'

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
