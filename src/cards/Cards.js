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
        image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/299338503_733792568008908_2606317681614748229_n.jpg?stp=c120.0.720.720a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=3d9721&_nc_ohc=rM3Pig67N-8AX9p6BvG&_nc_ht=scontent.fprn12-1.fna&oh=00_AfB4az2E3ddEHIYCNlJR4NZn2KFvAH-ZEouRJCoQBxtrFA&oe=658AAA70"
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
        image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/409963630_842630214534997_1166975585917235736_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=f4rQqCTIELsAX_BehUE&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDjxxezqe0-hWZUqQxZ5DFtt4AyRDiT5-Q_Q26_rRrPkg&oe=658A9CC5"
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