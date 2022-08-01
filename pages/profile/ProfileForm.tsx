import React, { useState } from 'react'

function ProfileForm() {
  const [name, setName] = useState('')

  return (
    <div className="text-xl w-500 container mx-auto mx-10 space-y-6 bg-gray-50 rounded">
      <form
        className="mx-10 p-10 text-online-blue-500"
        action="#"
        method="POST"
      >
        <div className="grid grid-cols-1 gap-10">
          <p className="text-2xl font-bold mx-auto">Endre profilinformasjon</p>
          <span className="text-lg font-medium">Navn:</span>
          <input
            type="text"
            className="w-full border-gray-200 focus:ring-0 focus:border-black text-online-blue-300"
            placeholder="Navn..."
          />
          <span className="text-lg font-medium ">Email:</span>
          <input
            type="text"
            className="w-full border-gray-200 focus:ring-0  text-online-blue-300"
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
