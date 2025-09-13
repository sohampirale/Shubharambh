import './globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import WapFloating from '../components/Wap/WapFloating'

export const metadata = {
  title: 'Shubharambh Event & Management',
  description: 'We Build Your Dream Around You - Premium Indian Wedding & Event Planning',
}

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WapFloating />
      </body>
    </html>
  )
}