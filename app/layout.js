import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recycling Rewards',
  description: 'Merchant interface for recycling rewards program',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground shadow-md">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-4 text-center">
              © 2023 Recycling Rewards. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}