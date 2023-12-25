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
  
  function Prozecard() {
   return (
  
     
      <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center',}}>
      
      <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/348289138_750767763721705_1504588465957008891_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=u0Lci19M9XYAX9FYQlz&_nc_ht=scontent.fprn12-1.fna&oh=00_AfAZn5t3bxeaF86CdtPz8WQabg64_w1BG1r2EufXktKkfw&oe=658BC500"
         alt="unsplash image"
       />
 
       <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           MilkShake Nutella
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}} size = 'medium' >
        Porosite Tani
       </Button>
       {/* <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button> */}
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/348337283_750764770388671_3368630938198498163_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=zdsoaSe2-5AAX-IPhbt&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDd28q_wcUblGa1mLnlizIEGOrmRUW-TrwrjDBgfuSlvg&oe=658B49EA"
         alt="unsplash image"
       />
 
     <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.30 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           MilkShake Oreo
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/347593390_745839217547893_7372189245278180437_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=at8nb-QqsKkAX9HajTx&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCdyB5EI248j_VQOj3OsNtxaoN3D0SD0BPMkA2-jr97bg&oe=658B5A6F"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Akullore 
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/309989593_532246032240547_3198685538298873842_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=gpOrE4pT4DQAX_UerA5&_nc_ht=scontent.fprn12-1.fna&oh=00_AfBzSRuy8GH78fZB2RauXfuo-tc7sT40NnMvGz5MhCeTbA&oe=658B4693"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Torte Vanilje 
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/310096326_531068819024935_6355375246359321834_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LcwRmJW-988AX_-IVid&_nc_oc=AQlAkK4hnsol5rgUCb-AsJoR6wGEmseClkqSt6uvXgBt5DjSq85w1UF8rl3FLIvBTIe1vISUmB88KlNY9D6eTP62&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDExg6uCX4EX-kNT8VfxdT9JgpcgBU08Es-jcL9OBh7wA&oe=658B8FC6"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               2.20 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Torte Arre Kokosi 
         </Typography>
        
       </CardContent>
       <Button variant="contained" sx = {{ backgroundColor : '#7dd87d', '&:hover': {
          backgroundColor: '#4c9173'}}}size = 'medium' >
        Porosite Tani
        </Button>
     </Card>

     <Card sx={{ maxWidth: 350 , display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius: 12 ,'&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' } }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/347584764_745837954214686_5952985001975584795_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=AlWAHPlv7iEAX8auZPV&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDioXyYICcskhkVqdbapOmiG4lPNTTxETFTRXZlyZ9Jxg&oe=658BD3D6"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               4.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           Tutti Frutti
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
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/347557977_748710200594128_2289107219237861705_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xoSuSYXWtlYAX_kPkxV&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDRdmC6Ch6ZkODVk7O6Sl0Y0pXXCoUh9LAKIR6mxD70MA&oe=658B7A3F"
         alt="unsplash image"
       />
 
 <CardContent style={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           MilkShake Me Fruta Mali
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

export default Prozecard;