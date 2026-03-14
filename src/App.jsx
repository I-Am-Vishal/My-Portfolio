import { Box, Container } from '@mui/material';
import Appbar from './components/Appbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './styles/global.css';

function App() {
  return (
    <Box sx={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(139, 92, 246, 0.06) 0%, transparent 50%), var(--bg-deep)', minHeight: '100vh', color: 'var(--text-primary)', width: '100%' }}>
      <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 2, width: '100%' }}>
        <Appbar />
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Education />
        <Contact />
        <Resume />
      </Container>
    </Box>
  );
}

export default App;
