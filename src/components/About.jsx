import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography variant="overline" sx={{ background: 'linear-gradient(90deg, #00d4aa, #3b82f6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: 4, fontWeight: 600 }}>About Me</Typography>
      <Typography variant="h3" sx={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', mt: 1, mb: 3, '&::after': { content: '""', display: 'block', width: 60, height: 4, background: 'linear-gradient(90deg, #00d4aa, #8b5cf6)', borderRadius: 2, mt: 1 } }}>Profile Summary</Typography>
      <Box
        className="glass-card hover-lift"
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: '20px',
          maxWidth: 800,
        }}
      >
        <Typography
          sx={{
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            fontSize: '1.05rem',
          }}
        >
          Mechanical Engineer by degree but self-taught and passionate in the field of computer software
          and hardware technologies. With over{' '}
          <Box component="span" sx={{ background: 'linear-gradient(90deg, #00d4aa, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600 }}>
            6 years
          </Box>{' '}
          of dedicated professional experience in web development, I have successfully transitioned
          into high-level IT leadership.
        </Typography>
        <Typography
          sx={{
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            fontSize: '1.05rem',
            mt: 2,
          }}
        >
          Currently serving as a <Box component="span" sx={{ background: 'linear-gradient(90deg, #00d4aa, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600 }}>Frontend Lead</Box>,
          I specialize in building scalable, high-performance applications using modern frameworks and agile methodologies.
          I natively belong from <Box component="span" sx={{ color: 'var(--text-primary)' }}>Ambikapur, Chhattisgarh</Box>,
          and completed my graduation from{' '}
          <Box component="span" sx={{ color: 'var(--accent)' }}>Dr. C.V. Raman University</Box>, Bilaspur.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
