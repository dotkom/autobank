import React from 'react'
import CardTable from 'src/components/elements/Cards/CardTable'
import Admin from 'src/components/Layout/Admin'
import FilterCard from 'src/components/elements/Cards/FilterCard'
import Table from 'src/components/elements/application/ApplicationTable'

export default function Tables() {
  return (
    <Admin>
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="w-full xl:col-span-2 row-span-2 mb-12 xl:mb-0 px-4">
          <Table headings={[]} rows={[]} />
        </div>
        <div className="w-full row-start-1 px-4">
          <FilterCard />
        </div>
      </div>
    </Admin>
  )
}
