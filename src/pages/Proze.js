import React from 'react'
import MuiNavbar from '../components/Navbar'
import Prozecard from '../cards/Prozecard'
import { Container } from '@mui/material'
import Footer from '../components/Footer'

function Proze() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Prozecard />
      </Container>

      <Footer />
      
    </div>
  )
}

export default Proze
