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
  
  function Retrocard() {
   return (
  
     
      <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center',}}>
      
      <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/406008719_771889021644496_3114785264729716574_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TseovOU8Dx4AX9Hfys1&_nc_ht=scontent.fprn12-1.fna&oh=00_AfByGgcSCuuWkYYrELEmqJSQw5D-oQX0qzxcVjwIEbt4Qg&oe=658CC791"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Chicken Sandwich
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/404539932_769206678579397_8646989278352812866_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8HYkTZEgLZsAX9WQPAd&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCh7Hp9S3lauCYEBD9KQ8uUSDABgthdqIiFheqZl3de1Q&oe=658C7694"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.50 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Hamburger
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/397572209_761679729332092_7427660483158273005_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=3xm6LAZLmawAX_x6zav&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCpQ4FMEOvLy0jJxrn-DULcadkTuMhya-ZoixgSakCJkg&oe=658C76E8"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.70€
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Chicken Wrap
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/393446072_18202365619283157_1317960387285274846_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FroW6uJ4O70AX_ZsUtg&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDHF096Gd-U6qxWl7_DXEpfZ9xf5G0sDQovu3HO2DaJuQ&oe=658CFA23"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.90€
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Onion Burger
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/387865940_739508224882576_4668297407780675328_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=JwkYPXtiiMcAX8ARVKN&_nc_oc=AQlDnZgQkr8nBVMahv65AmxjU1yJG4yRKpBM7o_3jST5diwBd4vNCKN492momyo2tswWfRmCaE1i-jqaSFkUiT8u&_nc_ht=scontent.fprn12-1.fna&oh=00_AfA7vaxuOOcH9qpgT9d0PKr1DPSfCnq7p3k9X3iv7dpqTg&oe=658CEA6C"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               6.00€
           </Typography>
        
         <Typography variant="body30" color="inherit">
          Oferta Twins
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/374696825_717594707073928_7286681505181380877_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=R-ha_DTIKE8AX-BHUSJ&_nc_ht=scontent.fprn12-1.fna&oh=00_AfB3NJaSwKdf58zPEL1nF-LhGGyemNS4FV12wP_t1O37Pg&oe=658D105C"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               4.00€
           </Typography>
        
         <Typography variant="body30" color="inherit">
          Champion Burger
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/391717474_752297146937017_4107831484580108600_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=GQysxq5qf-sAX-K52k1&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCaUomyOrlmqwZa-Yjqi6cqQ7soNWAi9GGWfnYUQ7g6yQ&oe=658D1156"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00€
           </Typography>
        
         <Typography variant="body30" color="inherit">
          Egg Burger
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

export default Retrocard;