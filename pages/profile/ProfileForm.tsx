import React, { useState } from 'react'

function ProfileForm() {
  const [name, setName] = useState('')

  return (
    <div className="text-xl w-500 container mx-auto bg-online-blue-300 mx-10 space-y-6">
      <form className="mx-10 p-10 text-white" action="#" method="POST">
        <div className="grid grid-cols-1 gap-10">
          <p className="text-2xl font-bold ">Endre profilinformasjon</p>
          <span className="text-lg font-medium">Navn:</span>
          <input
            type="text"
            className="w-full border-gray-200 focus:ring-0 focus:border-black text-online-blue-300"
            placeholder="Navn..."
          />
          <span className="text-lg font-medium ">Email:</span>
          <input
            type="text"
            className="w-full border-gray-200 focus:ring-0 focus:border-black text-online-blue-300"
            placeholder="Email..."
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
