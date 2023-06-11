import "bootstrap/dist/css/bootstrap.min.css";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './styles/style.scss'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";

export const metadata = {
  title: 'Wynn Resorts',
  description: 'Wynn Resorts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" as="font" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css" />
      </head>
      <body suppressHydrationWarning={true} >
        <Header />
        {children}
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
