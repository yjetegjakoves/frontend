import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Retrocard from '../cards/Retrocard'

function Retro() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Retrocard />
      </Container>
      
    </div>
  )
}

export default Retro