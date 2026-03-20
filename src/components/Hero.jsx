import { Box, Typography } from '@mui/material';

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: '75vh', md: '90vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Centered ambient orbs */}
      <Box sx={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)', filter: 'blur(70px)', animation: 'float 8s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.05) 50%, transparent 70%)', filter: 'blur(60px)', animation: 'float 6s ease-in-out infinite reverse' }} />

      {/* Photo — centered, prominent */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          mb: 4,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -20,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(139,92,246,0.1), rgba(236,72,153,0.08))',
            filter: 'blur(30px)',
            zIndex: -1,
          },
        }}
      >
        <Box
          component="img"
          src={`${import.meta.env.BASE_URL}assets/vishal-portrait.png`}
          alt="Vishal Raj Sinha"
          className="animate-fade-in-up hover-lift"
          sx={{
            width: 220,
            height: 220,
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid',
            borderColor: 'rgba(0,212,170,0.4)',
            boxShadow: '0 0 60px rgba(0,212,170,0.3), 0 0 100px rgba(139,92,246,0.2)',
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
          }}
        />
      </Box>

      {/* Name & title — centered */}
      <Typography
        variant="overline"
        className="animate-fade-in-up animate-delay-1"
        sx={{
          color: 'var(--accent)',
          letterSpacing: 5,
          fontWeight: 600,
          mb: 1.5,
          display: 'block',
        }}
      >
        Frontend Lead
      </Typography>
      <Typography
        variant="h1"
        className="animate-fade-in-up animate-delay-2"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
          lineHeight: 1.1,
          mb: 2,
          background: 'linear-gradient(135deg, #00d4aa 0%, #3b82f6 40%, #8b5cf6 70%, #ec4899 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}
      >
        Vishal Raj Sinha
      </Typography>
      <Typography
        className="animate-fade-in-up animate-delay-3"
        sx={{
          color: 'var(--text-secondary)',
          fontSize: { xs: '1rem', md: '1.2rem' },
          maxWidth: 540,
          mx: 'auto',
          mb: 3,
          lineHeight: 1.8,
        }}
      >
        Building scalable, high-performance web solutions with modern frameworks & agile methodologies.
        6+ years turning ideas into pixels.
      </Typography>

      {/* Contact links — centered */}
      <Box
        className="animate-fade-in-up animate-delay-4"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <Box
          component="a"
          href="mailto:rajvish7774@gmail.com"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: 'var(--accent)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            px: 2,
            py: 1,
            borderRadius: 2,
            bgcolor: 'rgba(0,212,170,0.08)',
            border: '1px solid rgba(0,212,170,0.2)',
            transition: 'all 0.25s ease',
            '&:hover': { bgcolor: 'rgba(0,212,170,0.15)', borderColor: 'rgba(0,212,170,0.4)' },
          }}
        >
          rajvish7774@gmail.com
        </Box>
        <Box
          component="a"
          href="tel:+917566782670"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            px: 2,
            py: 1,
            borderRadius: 2,
            bgcolor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.25s ease',
            '&:hover': { color: 'var(--accent)', borderColor: 'rgba(0,212,170,0.3)' },
          }}
        >
          +91 7566782670
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
