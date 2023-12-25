import React from 'react'
import MuiNavbar from '../components/Navbar'
import Prozecard from '../cards/Prozecard'
import { Container } from '@mui/material'

function Proze() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Prozecard />
      </Container>
      
    </div>
  )
}

export default Proze
