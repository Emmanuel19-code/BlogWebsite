import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Blog App',
  description: 'Building a blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Navbar/>
        {children}
       </body>
    </html>
  )
}
