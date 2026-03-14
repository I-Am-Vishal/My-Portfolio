import { Box, Button, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';

function Resume() {
  const [hover, setHover] = useState(false);

  return (
    <Box id="resume" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h4"
        className="animate-fade-in-up"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          mb: 2,
          '&::after': {
            content: '""',
            display: 'block',
            width: 60,
            height: 4,
            background: 'linear-gradient(90deg, #f59e0b, #ef4444, transparent)',
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        Resume
      </Typography>
      <Typography
        sx={{
          color: 'var(--text-secondary)',
          mb: 4,
          maxWidth: 480,
        }}
      >
        Prefer a traditional PDF? Download my full resume for offline review.
      </Typography>

      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="glass-card hover-lift"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 2,
          p: 2.5,
          borderRadius: 2,
          cursor: 'pointer',
          transition: 'all 0.3s var(--ease-out-expo)',
          borderColor: hover ? 'var(--border-accent)' : undefined,
          boxShadow: hover ? '0 0 24px var(--accent-glow)' : undefined,
        }}
      >
        <Button
          component="a"
          href="/resume.pdf"
          download
          startIcon={<DownloadIcon />}
          sx={{
            color: '#f59e0b',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'var(--bg-glass)',
            },
          }}
        >
          Download Resume (PDF)
        </Button>
      </Box>
    </Box>
  );
}

export default Resume;
