import React from 'react'
import { Container, requirePropFactory, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

export const ProjectsWrapper = styled(Container)({
    alignItems: 'center',
    height: '100vh',
    margin: '0px',
    width: '100%',
    padding: '5vh 10vw'
})

const ProjectsSection = () => {
  return (
    <>
        <ProjectsWrapper id='project' disableGutters maxWidth='false'>
            <h1>Projects</h1>
        </ProjectsWrapper>
    </>
  )
}

export default ProjectsSection