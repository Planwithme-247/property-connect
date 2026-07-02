import './styles/globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Property Connect',
  description: 'Minimal Next.js starter for Property Connect'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="w-full border-b py-4">
            <div className="mx-auto max-w-4xl px-4"> 
              <h1 className="text-lg font-semibold">Property Connect</h1>
            </div>
          </header>
          <main className="flex-1 mx-auto max-w-4xl w-full px-4 py-8">{children}</main>
          <footer className="w-full border-t py-4">
            <div className="mx-auto max-w-4xl px-4 text-sm text-slate-500">© {new Date().getFullYear()} Property Connect</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
