import {React, useState} from 'react';
import { 
    Container, 
    Stack, 
    Typography,
    Paper, 
    Chip,
    Avatar
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import muiIcon from './MUI.png';
import reactIcon from './react.png';
import threeIcon from './three.png'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export const FooterWrapper = styled(Container)({
    alignItems: 'center',
    height: 'fit-content',
    margin: '0px',
    width: '100%',
    overflow: 'hidden'
})

export const FooterLicense = styled(Typography)({
    color: '#555',
    textAlign: 'center',
    fontSize: '12px',
    maxWidth: '30vw',
    transition: 'color 0.5s ease-in-out',

    "@media (max-width:600px)": {
        fontSize: '12px',
        maxWidth: 'none'
    },

    "&:hover": {
        color: '#aaa',
    }
})

const Footer = () => {
    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return ( 
    <>
        <FooterWrapper disableGutters maxWidth='false'>
            <Paper
                sx={{
                    height: 'fit-content',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: {xs:'10vh 10vw',sm:'5vh 5vw'},
                    justifyContent: 'center',
                    }}
                    elevation={12}
                    square
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <IconButton component="a" href="https://www.linkedin.com/in/mihad-khondker/" aria-label="delete" size="large" color="secondary">
                        <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton component="a" href="https://github.com/bigkho" aria-label="delete" size="large" color="secondary">
                        <GitHubIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="large" color="secondary" onClick={handleOpen}>
                        <GoogleIcon fontSize="inherit" />
                    </IconButton>
                    
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    marginTop="1vh"
                    marginBottom="1vh"
                >
                    <p>
                        Made with
                    </p>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >   
                    <Chip label="React.js" sx={{backgroundColor:"#222",color:"#fff"}} onClick avatar={<Avatar src={reactIcon}/>}/>
                    <Chip label="MaterialUI" sx={{backgroundColor:"#222",color:"#fff"}} onClick avatar={<Avatar src={muiIcon}/>}/>
                    <Chip label="Three.js" sx={{backgroundColor:"#222",color:"#fff"}} onClick avatar={<Avatar src={threeIcon}/>}/>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    marginTop="1vh"
                    marginBottom="1vh"
                >
                    <FooterLicense>
                    Earth model is "Low Poly Earth" (https://sketchfab.com/3d-models/low-poly-earth-c99483d5e2a94ca8b4f3579145584beb) by Konstantin_Keller (https://sketchfab.com/Konstantin_Keller) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
                    </FooterLicense>
                </Stack>
            </Paper>
        </FooterWrapper>
        <Dialog onClose={handleClose} open={isOpen}>
            <DialogTitle>
                Email me at:
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    mihadkho2019@gmail.com
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default Footer