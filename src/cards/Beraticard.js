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
  
  function Beraticard() {
   return (
  
     
     <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center',}}>
      
       <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/410103215_844632027668149_5303994330108828054_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XVbxIfP3M5AAX8PrsC3&_nc_ht=scontent.fprn12-1.fna&oh=00_AfADb2sWKl_A6U25rGVtTYw4ZMFtes0aXxzUiPid5DkCxA&oe=658B3D0B"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                4.00 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Mish Viqi
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/409963630_842630214534997_1166975585917235736_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=f4rQqCTIELsAX9o1e3i&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDDG4oZpEex_G-XW10YKiqyu3plUjxf_11izorDC2Y6ng&oe=658C9705"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                3.00 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Pleskavice e Mbushur
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/402337194_824287159702636_6044219984627242543_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=OI07Cv2Png0AX_2tVYT&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCJfUGUlmemPW6WonQAl67db0r1bpJsX1u6mZ_WNiy3GA&oe=658B47ED"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                3.50 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Gullash
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/400164652_819555620175790_7302058510418379257_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=MwV-P_7o8U0AX-You8Y&_nc_ht=scontent.fprn12-1.fna&oh=00_AfC-FlfEoWZUr0AyV6G2K2Kme12q03kv7YqACjRVRfzYrg&oe=658AEFEE"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                3.00 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Vishlle
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/400158736_819556830175669_7797611311700352302_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TUyGOy1390cAX8UYdx1&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCcWCWvwhsMq0559QpjSQsbufXZc-5LVRK5DDMMDjHllA&oe=658CA9BE"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                5.00 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Kombinim i Mishrave
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/399316733_819552966842722_7369765019221613962_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ETX0zrRf-swAX9fyNUF&_nc_ht=scontent.fprn12-1.fna&oh=00_AfDJR-M9bqYQyjQ8fKspR0LSw0zVJYi-t4g7DSPu44S3sA&oe=658CBA8C"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                3.50 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Mish i Pules
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/364209018_757001243097895_6393292749246666042_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=3mtVx6FFle8AX_7WKvm&_nc_ht=scontent.fprn12-1.fna&oh=00_AfBJRKNcCNCrEWEzK4H2i4GsLTDkf2-no4_lNUETp3AHDg&oe=658B36D8"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                4.00 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Pica Margarita
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/358034725_731163549014998_359823418949329152_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Ef5WqkqyqR8AX-sygVe&_nc_ht=scontent.fprn12-1.fna&oh=00_AfBVYYigFe-MijXogCHuPlFoNdIuwxuRrMcCpqxdLt-d0A&oe=658B2EE5"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                4.00 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Pleskavica Te Djegsta
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="260"
          image="https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/343238919_763268428663918_1493367652430862716_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qth4R4W00osAX-46q7d&_nc_ht=scontent.fprn12-1.fna&oh=00_AfCBZIKNc4XyIa4zBJTNV45D5B2DzQOhSEVOBbBAf_lDYw&oe=658BCF6A"
          alt="unsplash image"
        />
  
        <CardContent>
            <Typography gutterBottom variant = 'h5' component = 'div'>
                2.00 €
            </Typography>
         
          <Typography variant="body30" color="inherit">
            Sulltan
          </Typography>
         
        </CardContent>
        <Button size = 'small'Button color = 'inherit'>Porosite Tani</Button>
      </Card>
      </Box>
   )
  }

  export default Beraticard;