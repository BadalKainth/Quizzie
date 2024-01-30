import NavBar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      <NavBar />
      <main
        style={{
          width: '100%',
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
