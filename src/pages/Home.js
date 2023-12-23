import React from 'react'
import MuiNavbar from '../components/Navbar'
import Cards from '../cards/Cards'
import Main from '../components/Main'
import Beraticard from '../cards/Beraticard'
import Prozecard from '../cards/Prozecard'
import KFCcard from '../cards/KFCcard'
import Damecards from '../cards/Damecards'
import Propercard from '../cards/Propercard'
import Retrocard from '../cards/Retrocard'

function Home() {
  return (
    <div>
      <MuiNavbar/>
      <Main />
      <Cards />
      <Beraticard />
      <Prozecard />
      <KFCcard />
      <Damecards />
      <Propercard />
      <Retrocard />
      <h2>Home page</h2>
    </div>
  )
}

export default Home
