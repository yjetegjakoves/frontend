import React from 'react'
import MuiNavbar from '../components/Navbar'
import KFCcard from '../cards/KFCcard'
import Footer from '../components/Footer'
import { Container } from '@mui/material'


function Kfc() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <KFCcard />
      </Container>
      
      <Footer/>
      
    </div>
  )
}

export default Kfc