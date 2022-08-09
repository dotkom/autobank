import React from 'react'
import CardProfile from 'src/components/elements/Cards/CardProfile'
import CardSettings from 'src/components/elements/Cards/CardSettings'
import Admin from 'src/components/Layout/Admin'

export default function Settings() {
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </Admin>
  )
}
