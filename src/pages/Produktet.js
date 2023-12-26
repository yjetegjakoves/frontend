import React from 'react'
import MuiNavbar from '../components/Navbar'
import MuiCard from '../cards/Cards'
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography'
import logo from '../images/restaurantet transparent.png'



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
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                    width: '300px',  // Adjust the width as needed
                    height: '50px', // Adjust the height as needed
                    // borderRadius: '100%',
                    objectFit: 'cover',  // This ensures the image retains its aspect ratio
                    }}
                />
                    
                    <MuiCard />

        </Container>
      <Footer/>
      
    </div>
  )
}

export default Produktet
