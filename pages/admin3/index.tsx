import React from 'react'
import Sidebar from './Sidebar'
import Receiptlist from './Receiptlist'
import { useState } from 'react'

function index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Sidebar />

        <Receiptlist />
      </div>
    </>
  )
}

export default index
