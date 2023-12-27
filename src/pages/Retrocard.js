import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Retrocard from '../cards/Retrocard'
import Footer from '../components/Footer'

function Retro() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Retrocard />
      </Container>

      <Footer />
      
    </div>
  )
}

export default Retro