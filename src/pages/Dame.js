import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Damecards from '../cards/Damecards'
import Footer from '../components/Footer'

function Dame() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Damecards />
      </Container>

      <Footer />
      
    </div>
  )
}

export default Dame