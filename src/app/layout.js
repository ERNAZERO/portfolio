import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ernaz Erkinbekov - Portfolio',
  description: 'Software Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}