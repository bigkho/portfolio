import {useEffect, React} from 'react'
import { Container, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import artblock from './ArtistBlock.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import mtabus from './busproj.png';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectsWrapper = styled(Container)({
    alignItems: 'center',
    height: 'fit-content',
    margin: '0px',
    width: '100%',
    padding: '5vh 10vw'
})

export const CardInfo = styled(Typography)({
  fontFamily: 'League Spartan',
  color: '#fff',
  fontSize: '2vh',
  variant: 'h1',
  cursor: 'pointer',
  textAlign: 'left',

  "@media (max-width:600px)": {
      fontSize: '16px',
  },
})

export const CardInfoBig = styled(Typography)({
  fontFamily: 'League Spartan',
  color: '#fff',
  fontSize: '3vh',
  cursor: 'pointer',
  textAlign: 'left',
  fontWeight: 900,

  "@media (max-width:600px)": {
      fontSize: '16px',
  },
})

export const ProjectsHeader = styled(Typography)({
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

export const SkillsSubHeader = styled(Typography)({
  fontFamily: 'League Spartan',
  fontSize: '3rem',
  fontWeight: 1000,
  maxWidth: 800,
  margin: '1vh',

  "@media (max-width:600px)": {
      fontSize: '8vw',
  }
})

export const LinkItem = styled(Paper)({
  width: 'fit-content',
  height: 'fit-content',
  background: '#600062',
  color: '#000',
  fontSize: '1rem',
  fontWeight: 800,
})

const ProjectsSection = () => {

  useEffect(()=> {
    Aos.init({duration:2000,easing:'ease-out-back'})
}, [])

  return (
    <>
        <ProjectsWrapper id='project' disableGutters maxWidth='false'>
            <ProjectsHeader data-aos="fade-up">PROJECTS</ProjectsHeader>

            <Container disableGutters maxWidth='false' sx={{display:{xs:'none',sm:'flex'},justifyContent:'space-between',marginBottom:'10vh'}}>
              <Card 
                  sx={{
                    backgroundImage: 'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )',
                      height: '60vh',
                      width: '100%',
                      marginBottom: {xs:'5vh',sm:'0px'},
                      }}
                  elevation={12}
                  data-aos="fade-up"
                  >
                  <Container disableGutters maxWidth='false'
                    sx={{height:'100%',display:{xs:'flex'},justifyContent:'space-evenly',
                            flexDirection:{xs:'column',sm:'row'}
                    }}>
                    <CardContent sx={{height:'100%',display:'flex',flexDirection: 'column',justifyContent:'space-between',padding:'16px !important'}}>
                        <CardInfoBig>ArtistBlock</CardInfoBig>
                        <CardInfo>I developed the ArtistBlock Android app with a group of 4 members at Codepath.
                        We allowed users to draw images and post them on the platform for all users to see. 
                        We created a database with Parse, which we could access with Back4App. User data and the 
                        posts they made were stored. All data was updated and stored real-time so any posts or
                        user changes would be updated on the feed automatically.
                        </CardInfo>
                        <CardInfo>Users could access their own profile and see what drawings they have posted.
                        They could even delete and drawings they posted before, which would remove them from the
                        feed in real-time. They also were able to go to the settings and change their profile picture
                        by using the camera or their photo album. Users could also change their username and password.</CardInfo>
                        
                        <Container disableGutters maxWidth='false' 
                          sx={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'flex-end'}}>
                          <CardInfo>
                            View on Github
                          </CardInfo>
                          <IconButton component="a" href="https://github.com/AllNighters02/ArtistBlock" aria-label="delete" size="large" color="secondary" sx={{p:0}}>
                            <GitHubIcon fontSize="inherit" />
                          </IconButton>
                        </Container>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="Failed Connection"
                        image={artblock}
                        sx={{width:{xs:'100%',sm:'50%'},height:'100%'}}
                        />
                  </Container>
                  
              </Card>
            </Container>
            
            <Container disableGutters maxWidth='false'
              sx={{display:{xs:'block',sm:'flex'},justifyContent:'space-between'}}
            >
              <Card 
                  sx={{
                    backgroundImage: 'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )',
                      display: {xs:'block',sm:'none'},
                      height: '40vh',
                      width: {xs:'100%',sm:'30%'},
                      marginBottom: {xs:'5vh',sm:'0px'},
                      }}
                  elevation={12}
                  data-aos="fade-up"
                  >
                  
                  <CardContent sx={{height:'100%',display:'flex',flexDirection: 'column',justifyContent:'space-between',padding:'16px !important'}}>
                      <CardInfoBig>ArtistBlock</CardInfoBig>
                      <CardInfo>I developed the ArtistBlock Android app with a group of 4 members at Codepath.
                      We allowed users to draw images and post them on the platform for all users to see.
                      Users could access their own profile and delete any drawings they posted.
                      Users could also access the settings where they could change their info or profile picture.
                      </CardInfo>
                      <Container disableGutters maxWidth='false' 
                        sx={{
                          display:'flex',
                          justifyContent:'space-between',
                          alignItems:'flex-end'}}>
                        <CardInfo>
                          View on Github
                        </CardInfo>
                        <IconButton component="a" href="https://github.com/AllNighters02/ArtistBlock" aria-label="delete" size="large" color="secondary" sx={{p:0}}>
                          <GitHubIcon fontSize="inherit" />
                        </IconButton>
                      </Container>
                  </CardContent>
                  
              </Card>

              <Card 
                  sx={{
                    backgroundImage: 'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )',
                      height: '40vh',
                      width: {xs:'100%',sm:'35%'},
                      marginBottom: {xs:'5vh',sm:'0px'},
                      }}
                  elevation={12}
                  data-aos="fade-up"
                  >
                  
                  <CardContent 
                  sx={{height:'100%',display:'flex',flexDirection: 'column',
                  justifyContent:'space-between',padding:'16px !important',
                  }}>
                      <CardInfoBig>UNO in Command Line Interface</CardInfoBig>
                      <CardInfo>Replicated popular card game UNO in Linux CLI using Java.
                      Implemented full range of game functionality and edge cases, as well as alternative game versions.
                      </CardInfo>
                      <Container disableGutters maxWidth='false' 
                        sx={{
                          display:'flex',
                          justifyContent:'space-between',
                          alignItems:'flex-end'}}>
                        <CardInfo>
                          View on Github
                        </CardInfo>
                        <IconButton component="a" href="https://github.com/lilkho/MKS21X-FinalProject" aria-label="delete" size="large" color="secondary" sx={{p:0}}>
                          <GitHubIcon fontSize="inherit" />
                        </IconButton>
                      </Container>
                  </CardContent>
                  
              </Card>
              <Card 
                  sx={{
                      backgroundImage: 'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )',
                      height: {xs:'fit-content',sm:'40vh'},
                      width: {xs:'100%',sm:'60%'},
                      marginBottom: {xs:'5vh',sm:'0px'},
                      }}
                  elevation={12}
                  data-aos="fade-up"
                  >

                  <Container disableGutters maxWidth='false'
              sx={{height:'100%',display:{xs:'flex'},justifyContent:'space-evenly',
                      flexDirection:{xs:'column',sm:'row'}
              }}>
                    <CardContent sx={{height:'100%',display:'flex',flexDirection: 'column',justifyContent:'space-between'}}>
                        <CardInfoBig sx={{paddingBottom:{xs:'1vh',sm:'0px'}}}>IN DEVELOPMENT: MTA Bus Time Web App</CardInfoBig>
                        <CardInfo sx={{paddingBottom:{xs:'1vh',sm:'0px'}}}>Currently working with 2 other members on a MERN stack project which will use the MTA Bustime API.
                        We plan for users to be able to see all info possible on the stations nearby them.
                        </CardInfo>
                        <Container disableGutters maxWidth='false' 
                          sx={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'flex-end'}}>
                          <CardInfo>
                            View on Github
                          </CardInfo>
                          <IconButton component="a" href="https://github.com/bigkho/bus-app" aria-label="delete" size="large" color="secondary" sx={{p:0}}>
                            <GitHubIcon fontSize="inherit" />
                          </IconButton>
                        </Container>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="Failed Connection"
                        image={mtabus}
                        sx={{width:{xs:'100%',sm:'50%'},height:'100%'}}
                        />
                  </Container>
                  
              </Card>
            </Container>
            
        </ProjectsWrapper>
    </>
  )
}

export default ProjectsSection
