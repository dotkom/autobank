import React from 'react'

function ProfileForm() {
  return (
    <div className="text-xl border-black w-500 container mx-auto">
      <form className="mx-10 space-y-6" action="#" method="POST">
        <div>
          <p className="text-2xl"> Endre profilinformasjon </p>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
