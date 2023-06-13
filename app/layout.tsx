import Link from 'next/link'

import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TaskHub',
  description: 'Task manager app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <div className='h-screen w-32 bgCard'> 
            <ul>
              <li> <Link href="/">Logo</Link> </li>
              <li> <Link href="task">Task</Link> </li>
              <li> <Link href="board">Board</Link> </li>
              <li> <Link href="calendar">TimeSheet</Link> </li>
            </ul>
          </div>
          <div className="w-full">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  )
}
