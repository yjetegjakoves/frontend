import React from 'react'
import MuiNavbar from '../components/Navbar'
import { Container } from '@mui/material'
import Beraticard from '../cards/Beraticard'

function Berati() {
  return (
    <div>
      <MuiNavbar/>
      <Container maxWidth = {false} sx = {{ height: '70vh'}}>
        <Beraticard />
      </Container>
      
    </div>
  )
}

export default Berati