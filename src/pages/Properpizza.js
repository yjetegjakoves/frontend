import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Propercard from '../cards/Propercard'
import Footer from '../components/Footer'

function Proper() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Propercard />
      </Container>

      <Footer />
      
    </div>
  )
}

export default Proper