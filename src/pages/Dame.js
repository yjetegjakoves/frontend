import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Damecards from '../cards/Damecards'

function Dame() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Damecards />
      </Container>
      
    </div>
  )
}

export default Dame