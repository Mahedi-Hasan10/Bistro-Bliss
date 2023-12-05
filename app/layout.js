import './globals.css'
import Footer from './common/Footer'
import NavbarFun from './common/Navbar'


export const metadata = {
  title: 'Bistro Bliss',
  description: 'never compromise in quality, quantity and price',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <NavbarFun/>
        <div>
            {children}
        </div>
       <Footer/>
      </body>
    </html>
  )
}
