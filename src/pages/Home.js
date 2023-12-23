import React from 'react'
import MuiNavbar from '../components/Navbar'
import Cards from '../cards/Cards'
import Main from '../components/Main'
import Beraticard from '../cards/Beraticard'
import Prozecard from '../cards/Prozecard'

function Home() {
  return (
    <div>
      <MuiNavbar/>
      <Main />
      <Cards />
      <Beraticard />
      <Prozecard />
      <h2>Home page</h2>
    </div>
  )
}

export default Home
