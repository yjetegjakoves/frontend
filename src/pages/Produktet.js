import React from 'react'
import MuiNavbar from '../components/Navbar'
import MuiCard from '../cards/Cards'
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography'



function Produktet() {
  return (
    <div>
      <MuiNavbar/>
        <Container maxWidth = {false} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            width: '100%',
            margin: '0 auto', 
            }}>
                <Typography
                    variant="h1"
                    component="div"
                    sx={{
                    position: 'absolute',
                    top: '15%', 
                    left: '50%',
                    transform: 'translate(-50%, -50%)', 
                    zIndex: 1, 
                    color: 'black', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                    }}
                >
                    Restaurantet
                </Typography>
                    
                    <MuiCard />

        </Container>
      <Footer/>
      
    </div>
  )
}

export default Produktet
