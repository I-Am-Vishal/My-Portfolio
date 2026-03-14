import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    degree: 'B.Tech Mechanical Engineering',
    institution: 'Dr. C.V. Raman University',
    location: 'Bilaspur',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Oriental Public School',
    location: 'Ambikapur',
  },
  {
    degree: 'Secondary Education',
    institution: 'Holy Cross Convent School',
    location: 'Ambikapur',
  },
];

function Education() {
  return (
    <Box id="education" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h4"
        className="animate-fade-in-up"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          mb: 6,
          '&::after': {
            content: '""',
            display: 'block',
            width: 60,
            height: 4,
            background: 'linear-gradient(90deg, #ec4899, #8b5cf6, transparent)',
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        Education
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {education.map((edu, idx) => (
          <Box
            key={idx}
            className="glass-card hover-lift"
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              p: 3,
              borderRadius: 2,
              transition: 'all 0.3s var(--ease-out-expo)',
              '&:hover': { borderColor: 'var(--border-accent)' },
            }}
          >
            <SchoolIcon sx={{ color: '#ec4899', mt: 0.25 }} />
            <Box>
              <Typography
                sx={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                }}
              >
                {edu.degree}
              </Typography>
              <Typography
                sx={{
                  color: '#ec4899',
                  fontSize: '0.95rem',
                  mt: 0.5,
                }}
              >
                {edu.institution}
              </Typography>
              <Typography
                sx={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                }}
              >
                {edu.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Education;
