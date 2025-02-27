import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link href="/">Automation Insights</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/trends">Trends</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
