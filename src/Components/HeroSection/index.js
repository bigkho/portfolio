import React from 'react'
import { useEffect } from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material'
import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Divider from '@mui/material/Divider';
import {Element, animateScroll} from 'react-scroll';
import Planet3D from './planet3D';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const HeroContainer = styled(Container)({
    alignItems: 'center',
    height: '100vh',
    margin: '0px',
    width: '100%',
})

export const HeroHeader = styled(Typography)({
    fontFamily: 'League Spartan',
    textAlign: 'center',
    fontSize: '5vw',
    variant: 'h1',
    fontWeight: 1000,
    cursor: 'default',

    "@media (max-width:600px)": {
        fontSize: '14vw',
    },

    // "@media (min-width:1px)": {
    //     "&:hover": {
    //         "&::after": {
    //             transform: 'scaleX(1.0)',
    //         }
    //     }
    // },

    // "&::after": {
    //     content: '""',
    //     height: '0.25vh',
    //     width: '100%',
    //     background: '#0f0',
    //     display: 'flex',
    //     transform: 'scaleX(0)',
    //     transition: 'all 500ms ease'
    // }
})

export const HeroSubHeader = styled(Typography)({
    fontFamily: 'League Spartan',
    textAlign: 'center',
    fontSize: '2rem',
    variant: 'h1',
    fontWeight: 500,
    maxWidth: 800,

    "@media (max-width:600px)": {
        fontSize: '5vw',
    }
})

const HeroSection = () => {
    // const [click, setIsClicked] = useState(false)

    // const onClickHandler = () => {
    //     setIsClicked(!click)
    // }

    function scrollDown(){
        animateScroll.scrollTo(500)
    }

    useEffect(()=> {
        Aos.init({duration:2000,easing:'ease'})
    }, [])


    return (
        <HeroContainer id="hero" disableGutters maxWidth='false'>
            <Paper
                sx={{
                        height: '100vh',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${require("./space.jpg")})`,
                        padding: '100px 100px 25px',
                        color: '#fff',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                elevation={12}
                square
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <HeroSubHeader data-aos="fade-down">Welcome</HeroSubHeader>
                    <HeroHeader data-aos="fade-down">I am Mihad Khondker</HeroHeader>
                    <Divider variant="middle" sx={{borderColor:'#fff',width:"50vw"}}/>
                    <HeroSubHeader data-aos="fade-down">I am an aspiring Software Engineer that's inspired to constantly better my skills on all fronts.</HeroSubHeader>
                    
                </Stack>
                <Planet3D></Planet3D>
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    marginTop="auto"
                >
                    <Fab 
                        sx={{
                            width: {xs:'50px', sm:'100px'},
                            height: {xs:'50px', sm:'100px'},
                        }}
                        color="secondary"
                        onClick={scrollDown}
                        data-aos="fade-up"
                        data-aos-mirror="true"
                    >
                        <ArrowDownwardIcon sx={{width: '1.5em',height: '1.5em'}}/>
                    </Fab>
                </Stack>
            </Paper>
            <Element name="scroll-about" className="element"></Element>
        </HeroContainer>
    )
}

export default HeroSection