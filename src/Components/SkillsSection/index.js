import {React, useEffect} from 'react'
import { Container, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import Aos from 'aos';
import 'aos/dist/aos.css';
import python from './python.png';
import java from './java.jpg';
import cplusplus from './cplusplus.png';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import reactIcon from './react.png';
import nodejs from './nodejs.png';
import mongodbIcon from './mongodb.png';
import heroku from './heroku.jpg';
import githublogo from './github.png';
import figmaLogo from './figma.png';

export const SkillsWrapper = styled(Container)({
    alignItems: 'center',
    height: 'fit-content',
    margin: '0px',
    width: '100%',
})

export const SkillsHeader = styled(Typography)({
    fontFamily: 'League Spartan',
    fontSize: '2rem',
    fontWeight: 1000,
    maxWidth: 800,
    margin: '0px 1vw',

    "@media (max-width:600px)": {
        fontSize: '8vw',
    }
})

export const Planet = () => {
    return (
        <Sphere visible args={[1,100,200]} scale={2}>
            <MeshDistortMaterial color="#D5ED41" attach="material" distort={1}/>
        </Sphere>
    )
}

export const SkillItem = styled(Paper)({
    width: 'fit-content',
    height: 'fit-content',
    backgroundImage: 'linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% )',
    padding: '1vh 1vw',
    margin: '2vh 5vw',
    color: '#000',
    fontSize: '1rem',
    fontWeight: 800,

    '@media (max-width: 600px)': {
        padding: '2vh 5vw',
    },
})

const SkillsSection = () => {

    useEffect(()=> {
        Aos.init({duration:2000,easing:'ease-out-back'})
    }, [])

    return (
        <>
            <SkillsWrapper id="skills" disableGutters maxWidth='false'>
                <Paper
                        sx={{
                                height: 'fit-content',
                                backgroundColor: '#000',
                                color: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '10vh 10vw'
                            }}
                        elevation={12}
                        square
                >
                    <Container disableGutters maxWidth='false' sx={{display:'flex',justifyContent:{'xs':'space-between','sm':'flex-start'},alignItems:'center'}}>
                        <SkillsHeader data-aos="fade-up">Programming Languages</SkillsHeader>
                        <AvatarGroup sx={{bgcolor:"#000"}} total={3} data-aos="fade-up">
                            <Avatar alt="Python" src={python} sx={{bgcolor:"#fff"}}/>
                            <Avatar alt="Java" src={java} />
                            <Avatar alt="C++" src={cplusplus} />
                        </AvatarGroup>
                    </Container>
                    <Container disableGutters maxWidth='false' sx={{width:'100%',height:'fit-content',margin:'0px',padding:'1vh 1vw'}}>
                        <Grid
                        width="100%"
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        >
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Python</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Java</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>C++</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Javascript</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Typescript</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>HTML</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>CSS</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Kotlin</SkillItem>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container disableGutters maxWidth='false' sx={{display:'flex',justifyContent:{'xs':'space-between','sm':'flex-start',alignItems:'center'}}}>
                        <SkillsHeader data-aos="fade-up">Web Development</SkillsHeader>
                        <AvatarGroup total={3} data-aos="fade-up">
                            <Avatar alt="MongoDB" src={mongodbIcon} />
                            <Avatar alt="Node" src={nodejs} />
                            <Avatar alt="React" src={reactIcon} />
                        </AvatarGroup>
                    </Container>
                    <Container disableGutters maxWidth='false' sx={{width:'100%',height:'fit-content',margin:'0px',padding:'1vh 1vw'}}>
                    <Grid
                        width="100%"
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        >
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>React</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Node</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Express</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Bootstrap</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>MaterialUI</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Firebase</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>AWS</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>MongoDB</SkillItem>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container disableGutters maxWidth='false' sx={{display:'flex',justifyContent:{'xs':'space-between','sm':'flex-start',alignItems:'center'}}}>
                        <SkillsHeader data-aos="fade-up">Tools</SkillsHeader>
                        <AvatarGroup total={3} data-aos="fade-up">
                            <Avatar alt="Github" src={githublogo} />
                            <Avatar alt="Figma" src={figmaLogo} />
                            <Avatar alt="Heroku" src={heroku} />
                        </AvatarGroup>
                    </Container>
                    <Container disableGutters maxWidth='false' sx={{width:'100%',height:'fit-content',margin:'0px',padding:'1vh 1vw'}}>
                        <Grid
                        width="100%"
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        >
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Back4App</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Postman</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Git</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Heroku</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Linux</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>VSCode</SkillItem>
                            </Grid>
                            <Grid item xs={6} sm={3} data-aos="fade-up">
                                <SkillItem>Figma</SkillItem>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </SkillsWrapper>
        </>
    )
}

export default SkillsSection