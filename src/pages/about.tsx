import Link from 'next/link'
import Public from 'src/components/Layout/Public'

const AboutPage = () => (
  <Public title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Public>
)

export default AboutPage
