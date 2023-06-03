import '../styles/globals.css';
import Nav from '../components/navbar'

export const metadata = {
  title: 'PLSFIX',
  description: 'PLSFIX',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
        </div>
        <main className="app">
          <Nav />
          { children }
        </main>
      </body>
    </html>
  )
}

export default RootLayout;