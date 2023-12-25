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
  
  function Damecards() {
   return (
  
     
      <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center',}}>
      
      <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/365148223_856391512627434_7941659991545493951_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=U-EteD2NY2AAX9LDQJl&_nc_ht=scontent.fprn12-1.fna&oh=00_AfBxaucOEqCW3USfaV1IOY6SzoDNV0cjgnBg4kmowS15kg&oe=658B312E"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               4.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Fileto Pule
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/339258580_6057918597655605_7688121074110717540_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=RSdd6vTMokgAX-eF0ZZ&_nc_ht=scontent.fprn12-1.fna&oh=00_AfAsx2gYtfJCClQNliXuYIVUEuMs_y69i1UpBCKH0iWe4A&oe=658C35EE"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Omlete Me Pershut
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/331302064_592023442478682_8451979458903109389_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=DKeG34N1RXgAX_B7c8I&_nc_ht=scontent.fprn12-1.fna&oh=00_AfBcmHGtN5q1A_wwkNIIe9yisPxCRGBIHm-sESv4MH0FEA&oe=658AE30B"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.50 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Roll Cake
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/312472243_652984849634769_591529185824137624_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=FsOd8qpM-bsAX8p8619&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCC5Wyu2ocOe8YoNJe7X9zrk3eDHhAyrQEs2sAXzMJrzA&oe=658C3BC5"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.50 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Chicken Burger
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/312057378_640675264199061_8061395117243496263_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pqVoNuGdA_IAX9ejcFq&_nc_ht=scontent.fprn12-1.fna&oh=00_AfB_zb_u2PxAS-zOuFFarz-rIpkk6HJsT-lZwRSyeejfJA&oe=658C7846"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Classic Burger
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/297343361_5702725129778972_2150785468337127947_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TeekChs6DA8AX_YY79B&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDPrcxVugFtJqH0Ejtm2A0bv35Oymm_OTTEuoYUZV8Qow&oe=658BC854"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.50 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Shpageta Bologneze
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/294062400_5630367550348064_98518049788924334_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=hp1uytMUovwAX8bGLbA&_nc_ht=scontent.fprn12-1.fna&oh=00_AfA27eX6bK1Cg55x3kKUu-XEv42JjWXOQitek_fUmTvYhw&oe=658B21BD"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Waafle Kinder
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
        </Button>
     </Card>
     </Box>
      )
}

export default Damecards;