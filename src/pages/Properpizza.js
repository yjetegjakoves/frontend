import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Propercard from '../cards/Propercard'

function Proper() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Propercard />
      </Container>
      
    </div>
  )
}

export default Proper