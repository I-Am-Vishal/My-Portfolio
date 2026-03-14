import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme as usePortfolioTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle() {
  const { mode, toggleTheme } = usePortfolioTheme();
  const isDark = mode === 'dark';

  return (
    <Box
      onClick={toggleTheme}
      role="switch"
      aria-checked={!isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      sx={{
        width: 56,
        height: 28,
        borderRadius: 14,
        bgcolor: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        px: 0.5,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': { borderColor: 'var(--border-accent)', boxShadow: '0 0 16px var(--accent-glow)' },
      }}
    >
      <Box
        sx={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          bgcolor: 'var(--accent)',
          position: 'absolute',
          left: 4,
          transform: isDark ? 'translateX(0)' : 'translateX(26px)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,212,170,0.4)',
        }}
      >
        {isDark ? (
          <DarkModeIcon sx={{ fontSize: 14, color: '#fff' }} />
        ) : (
          <LightModeIcon sx={{ fontSize: 14, color: '#fff' }} />
        )}
      </Box>
    </Box>
  );
}

function Appbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        py: 1.5,
        px: 2,
        mb: 2,
        borderRadius: '16px',
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        border: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Box
          component="a"
          href="#"
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            transition: 'color 0.25s ease',
            '&:hover': { color: 'var(--accent)' },
          }}
        >
          VRS
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <Box
              key={item.label}
              component="a"
              href={item.href}
              className="nav-link"
              sx={{ display: { xs: 'none', md: 'inline-block' } }}
            >
              {item.label}
            </Box>
          ))}
          <ThemeToggle />
          <Button
            component="a"
            href="#contact"
            variant="contained"
            size="small"
            sx={{
              background: 'linear-gradient(135deg, #00d4aa 0%, #3b82f6 50%, #8b5cf6 100%)',
              color: '#fff',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '10px',
              px: 2,
              boxShadow: '0 4px 20px rgba(0,212,170,0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #00e5c4 0%, #60a5fa 50%, #a78bfa 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 30px rgba(139,92,246,0.4)',
              },
              transition: 'all 0.25s ease',
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Appbar;
