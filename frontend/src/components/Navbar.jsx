import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'
import CreateQuizModal from './CreateQuizModal'
import { useAuth } from '../hooks/auth'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

function NavBar() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const { setUser } = useAuth()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CreateQuizModal closeModal={closeModal} />
      </Modal>
      <nav className={classes.Navbar}>
        <div className={classes.NavbarContent}>
          <h2>QUIZZIE</h2>
          <div className={classes.NavLinks}>
            <Link to="/dashboard" className={classes.NavbarBtn}>
              Dashboard
            </Link>
            <Link to="/analytics" className={classes.NavbarBtn}>
              Analytics
            </Link>
            <button onClick={openModal} className={classes.NavbarBtn}>
              Create Quiz
            </button>
          </div>
          <button className={classes.NavbarBtn} onClick={() => setUser(null)}>
            LOG OUT
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar

