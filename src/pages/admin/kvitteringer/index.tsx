import React from 'react'
import CardBarChart from 'src/components/elements/Cards/CardBarChart'
import CardLineChart from 'src/components/elements/Cards/CardLineChart'
import CardPageVisits from 'src/components/elements/Cards/CardPageVisits'
import CardSocialTraffic from 'src/components/elements/Cards/CardSocialTraffic'
import Admin from 'src/components/Layout/Admin'
import { authenticate } from 'src/lib/auth'

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
