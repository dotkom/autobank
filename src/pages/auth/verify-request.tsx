import { OnlineBankom } from 'src/components/icons/Online'
import Public from 'src/components/Layout/Public'

export default function VerifyRequestPage() {
  return (
    <Public>
      <div className=" max-w-lg w-full flex items-center flex-col justify-center shadow-2xl bg-slate-50 p-10 rounded-lg">
        <OnlineBankom className="h-10 my-10" />
        <h1>Check your email</h1>
        <p>A sign in link has been sent to your email address.</p>
      </div>
    </Public>
  )
}
