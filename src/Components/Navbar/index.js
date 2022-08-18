import {React, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles'
import { Box, Button } from '@mui/material';
import {Link} from 'react-scroll';

export const NavBarWrapper = styled(AppBar)({
    padding: '0px !important',
    position: 'fixed',
    height: '5vh',
    width: 'fit-content',
    justifyContent: 'center',
    left: 0,
    right: 0,
    margin: 'auto',
    alignItems: 'center'
})

export const NavBtn = styled(Button)({
    fontSize: '1.0rem',
    fontFamily: 'Montserrat',
    fontWeight: 1000,
    letterSpacing: '2px',

    '&:hover': {
        color: "#00ff00",
    },
})

export const NavLink = styled(Link)({
    fontSize: '1.0rem',
    fontFamily: 'Montserrat',
    fontWeight: 1000,
    letterSpacing: '2px',
    cursor: 'pointer',
    marginLeft: '1vh',
    marginRight: '1vh',
    transition: 'color 0.2s ease-in-out',

    '&:hover': {
        color: "#00ff00",
    },

    '&.active': {
        color: "#00ff00",
    }
})

const Navbar = () => {
    const [click, setIsClicked] = useState(false)

    const onClickHandler = () => {
        setIsClicked(!click)
    }
    return (
        <>
            <Box>
                <NavBarWrapper sx={{
                    width: {'xs':'100vw','sm':'fit-content'},
                    margin: {'xs':'0px','sm':'auto'}
                }}>
                    <Toolbar>
                        <NavLink color="inherit" component="a" to="hero" spy={true} smooth='true' offset={-100} duration={500} onClick={onClickHandler}>HOME</NavLink>
                        <NavLink color="inherit" component="a" to="about" spy={true} smooth='true' offset={0} duration={500} onClick={onClickHandler}>ABOUT</NavLink>
                        <NavLink color="inherit" component="a" to="skills" spy={true} smooth='true' offset={0} duration={500} onClick={onClickHandler}>SKILLS</NavLink>
                        <NavLink color="inherit" component="a" to="project" spy={true} smooth='true' offset={0} duration={500} onClick={onClickHandler}>PROJECTS</NavLink>
                    </Toolbar>  
                </NavBarWrapper>
            </Box>
        </>
    )
}

export default Navbar