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
      
      <Card sx={{ maxWidth: 350 }}>
       <CardMedia
         component="img"
         height="260"
         image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/348289138_750767763721705_1504588465957008891_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=u0Lci19M9XYAX9FYQlz&_nc_ht=scontent.fprn12-1.fna&oh=00_AfAZn5t3bxeaF86CdtPz8WQabg64_w1BG1r2EufXktKkfw&oe=658BC500"
         alt="unsplash image"
       />
 
       <CardContent>
           <Typography gutterBottom variant = 'h5' component = 'div'>
               3.00 €
           </Typography>
        
         <Typography variant="body30" color="inherit">
           MilkShake Nutella
         </Typography>
        
       </CardContent>
       <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
     </Card>
     </Box>
     )
}

export default Retrocard;