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
          <div className='h-screen w-32 bgCard'> logo </div>
          <div className=" p-10">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  )
}
