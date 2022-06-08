import React from 'react'
import CardBarChart from 'components/elements/Cards/CardBarChart'
import CardLineChart from 'components/elements/Cards/CardLineChart'
import CardPageVisits from 'components/elements/Cards/CardPageVisits'
import CardSocialTraffic from 'components/elements/Cards/CardSocialTraffic'
import Admin from 'components/Layout/Admin'
import { authenticate } from 'lib/auth'

export default function Dashboard() {
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </Admin>
  )
}

export async function getServerSideProps(context) {
  return authenticate(context, true)
}
