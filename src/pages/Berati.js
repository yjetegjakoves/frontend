import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Beraticard from '../cards/Beraticard'
import Footer from '../components/Footer'

function Berati() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Beraticard />
      </Container>

      <Footer />
      
    </div>
  )
}

export default Berati