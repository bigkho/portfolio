import React, { useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import suit from './suit.jpg';
import typing from './typing.gif';
import zoro from './zoro.gif';
import Grid from '@mui/material/Grid';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {animateScroll} from 'react-scroll';

export const AboutWrapper = styled(Container)({
    alignItems: 'center',
    height: 'fit-content',
    margin: '0px',
    width: '100%',
    padding: '5vh 10vw'
})


export const AboutHeader = styled(Typography)({
    fontFamily: 'League Spartan',
    fontSize: '5rem',
    fontWeight: 1000,
    variant: 'h1',
    letterSpacing: '10px',
    transition: 'color 1s ease',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: '5vh',

    "@media (max-width:600px)": {
        fontSize: '12vw',
    },
})

export const CardInfo = styled(Typography)({
    fontSize: '1.0rem',
    variant: 'h1',
    transition: 'color 1s ease',
    cursor: 'pointer',
    textAlign: 'left',

    "@media (max-width:600px)": {
        fontSize: '16px',
    },
})

const AboutSection = () => {
    useEffect(()=> {
        Aos.init({duration:2000,easing:'ease-out-back'})
    }, [])

    return (
        <>  
            <AboutWrapper id="about" disableGutters maxWidth='false'
                sx={{height:{'xs':'fit-content',lg:'100vh'}}}
            >
                <AboutHeader data-aos="fade-up" id="trigger-left">ABOUT ME</AboutHeader>
                
                <Grid
                width="100%"
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Grid data-aos="fade-right" item xs={12} sm={4} align="center">
                        <Card 
                            sx={{
                                background: '#FDD5B7',
                                maxWidth: {xs:'70vw',sm:'20vw'},
                                height: 'fit-content',
                                marginBottom: {xs:'5vh',sm:'0px'},
                                }}
                            elevation={12}
                            >
                            <CardMedia 
                                component="img"
                                alt="Failed Connection"
                                image={suit}
                                sx={{maxHeight:'45vh'}}
                            />
                            <CardContent>
                                <CardInfo>Hey! My name is Mihad Khondker and I am currently a senior at Hunter College. 
                                I will be graduating next spring with a Bachelors in Computer Science.</CardInfo>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid data-aos="fade-up" item xs={12} sm={4} align="center">
                        <Card 
                            sx={{
                                background: '#CFE3E2',
                                maxWidth: {xs:'70vw',sm:'20vw'},
                                height: 'fit-content',
                                marginBottom: {xs:'5vh',sm:'0px'},
                                }}
                            elevation={12}    
                            >
                            <CardMedia 
                                component="img"
                                alt="Failed Connection"
                                image={typing}
                                sx={{maxHeight:'45vh'}}
                            />
                            <CardContent>
                                <CardInfo>I have been in the world of programming since at a young age.
                                I'm obsessed with the thrill that comes with creating and programming what I desire.
                                I'm constantly learning new things everyday, and working towards mastering my front-end
                                and back-end skillset.
                                </CardInfo>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid data-aos="fade-left" item xs={12} sm={4} align="center">
                        <Card 
                            sx={{
                                background: '#FCBDF9',
                                maxWidth: {xs:'70vw',sm:'20vw'},
                                height: 'fit-content',
                                marginBottom: {xs:'5vh',sm:'0px'},
                                }}
                            elevation={12}
                            >
                            <CardMedia 
                                component="img"
                                alt="Failed Connection"
                                image={zoro}
                                sx={{maxHeight:'45vh'}}
                            />
                            <CardContent>
                                <CardInfo>I am a huge fan of NBA basketball, especially the New York Knicks.
                                I enjoy playing games with my friends in my free time. 
                                I love watching Marvel movies and shows, as well as watching anime.
                                I'm a huge fan of the manga One Piece and my friends can attest to that.
                                </CardInfo>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </AboutWrapper>
            <Fab sx={{
                right: 20,
                bottom: 20,
                position: 'fixed',
            }}
            data-aos-anchor="#trigger-left"
            data-aos="fade-up"
            onClick={animateScroll.scrollToTop}
            >
                <ArrowUpwardIcon />
            </Fab>
        </>
    )
}

export default AboutSection