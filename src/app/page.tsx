import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/dashboard">Dash</Link>
    </div>
  )
}
