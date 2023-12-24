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
  
  function KFCcard() {
   return (
  
     
      <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center',}}>
      
      <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://kfckosova.com/wp-content/uploads/2020/06/Cheese_Burger-2.jpg"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.20 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Cheese Burger
         </Typography>
        
       </CardContent>
       <Button variant="contained" color="secondary" size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://kfckosova.com/wp-content/uploads/2020/05/Twister_Wrap.jpg"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.90 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Twister Wrap
         </Typography>
        
       </CardContent>
       <Button variant="contained" color="secondary" size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://kfckosova.com/wp-content/uploads/2020/05/Tower_Burger.jpg"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               4.50 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Tower Burger
         </Typography>
        
       </CardContent>
       <Button variant="contained" color="secondary" size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://kfckosova.com/wp-content/uploads/2020/05/Boxmaster.jpg"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               4.50 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Boxmaster
         </Typography>
        
       </CardContent>
       <Button variant="contained" color="secondary" size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://kfckosova.com/wp-content/uploads/2020/05/Original_Burger.jpg"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.90 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Original Burger
         </Typography>
        
       </CardContent>
       <Button variant="contained" color="secondary" size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://kfckosova.com/wp-content/uploads/2023/12/SANTA-BOX.jpg"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               6.99 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Santa Box
         </Typography>
        
       </CardContent>
       <Button variant="contained" color="secondary" size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://kfckosova.com/wp-content/uploads/2023/12/MEGA-SANTA-BUCKET.jpg"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               20.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Mega Santa Bucket
         </Typography>
        
       </CardContent>
       <Button variant="contained" color="secondary" size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     </Box>
      )
}

export default KFCcard;