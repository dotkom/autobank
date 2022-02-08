import Link from 'next/link'
import Layout from '../components/Layout'
import Navbar from '../components/navbar/Navbar'

const IndexPage = () => (
  <>
    <Navbar/>
      <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </>
)

export default IndexPage
