import { getAllPages } from '../lib/api'
import Link from 'next/link'


const Index = ({ allPages }) => (
  <div className='grid justify-center items-center h-screen prose'>
    <ul>
       {allPages.map(({title, slug}) => (
         <li>
          <Link href={`/pages/${slug}`}>
            <a>{title}</a>
          </Link>
         </li>
      ))}
      </ul>
  </div>
)

export async function getStaticProps() {
  const allPages = getAllPages()
  return {
    props: { allPages },
  }
}

export default Index
