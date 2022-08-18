import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import Footer from './Components/Footer';

const mainTheme = createTheme({
  palette: {
      background: {
        default: '#fff'
      },
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#fff'
      },
  }
})

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar></Navbar>
      <CssBaseline />
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
