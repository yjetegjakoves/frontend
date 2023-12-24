import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from '@mui/material'
import './Cards.css';

function MuiCard() {
 return (

   
   <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center',}}>
    
     <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="260"
        image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/326917631_556022326436607_3758278712938516909_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=aWv8yiVVAx0AX9F7HQY&_nc_ht=scontent.fprn12-1.fna&oh=00_AfD1ilVoMUmTgb8JSCG82P6t47PKyyZ-vwVUMfNyivGjkQ&oe=658B7120"
        alt="unsplash image"
      />

      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
          Maus
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="260"
        image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/347418681_745902494208232_9184513285786742108_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vkqR_AB256cAX9M1jWt&_nc_ht=scontent.fprn12-1.fna&oh=00_AfBcrv--5WTC9YhxFb2YQrNGSlGW-x_hbv0tSFjcY1WurA&oe=658B5E6C"
        alt="unsplash image"
      />

      <CardContent>
    
        <Typography variant="body2" color="text.secondary">
          Maus
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="260"
        image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/309393465_624249872508267_102191225845667346_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=yn4MhrzApp8AX9xzcqX&_nc_ht=scontent.fprn12-1.fna&oh=00_AfAUUEKnlZte84gdCasqMOxwO3vx5brUAkaVyurNa2-rEg&oe=658B18E6"
        alt="unsplash image"
      />

      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
          Maus
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="260"
        image="https://kfckosova.com/wp-content/uploads/2020/04/group-13.svg"
        alt="unsplash image"
      />

      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Maus
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="260"
        image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/307981275_502228968575125_3442201684618945974_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=OVWT08L8x3cAX_oB3RI&_nc_ht=scontent.fprn12-1.fna&oh=00_AfC-KJaDTaUvs8BhrrOnMmLD6FoEFZ0ysSyhw_CZFVbpGQ&oe=658ABEF0"
        alt="unsplash image"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Maus
        </Typography>
      </CardContent>
    </Card>
     
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="260"
        image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/226663683_879888319546507_2578134454705100745_n.png?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=U5yLq9vX5N4AX9owUAk&_nc_ht=scontent.fprn12-1.fna&oh=00_AfANQfUzxJvobVHgfhfMjCXJVZW_kYqAM2pXFFBeYdk_EA&oe=658D1CF7"
        alt="unsplash image"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Maus
        </Typography>
      </CardContent>
    </Card>
     

      


         

         
   </Box>
   
 )
}

export default MuiCard


