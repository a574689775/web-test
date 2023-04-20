import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div>主页</div>
        <div>
          {
            [1, 2, 3, 4, 5].map(id => (
              <Link key={id} href={`/user/${id}`}>Link to {id} </Link>
            ))
          }
        </div>
   </div>
  )
}
