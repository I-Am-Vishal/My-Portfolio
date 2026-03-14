import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const experiences = [
  {
    role: 'Frontend Lead',
    company: 'Gladminds Solutions Pvt Ltd',
    location: 'Remote',
    period: 'Oct 2024 – Present',
    desc: 'Leading the frontend department to deliver high-quality, scalable web solutions. Managing cross-functional project workflows in a fully remote environment. Architecting user interfaces using JavaScript and modern frameworks like Vue.js/Nuxt.js and Django.',
  },
  {
    role: 'Frontend Developer',
    company: 'Razorpod Technologies Private Ltd',
    location: 'Remote',
    period: 'Oct 2022 – Oct 2024',
    desc: 'Developed and maintained complex frontend architectures using Vue.js/Nuxt.js. Collaborated with several professional teams to optimize application performance and user experience.',
  },
  {
    role: 'Frontend Developer',
    company: 'CodeNicely LLP',
    location: 'Raipur',
    period: 'Dec 2021 – Sept 2022',
    desc: 'Engineered responsive web components and translated UI/UX designs into functional code. Utilized advanced JavaScript to enhance client-side interactivity and performance.',
  },
  {
    role: 'Web Developer',
    company: 'Invictus World LLP',
    location: 'Pune',
    period: 'Aug 2020 – Nov 2021',
    desc: 'Initiated professional transition into IT by building and deploying web platforms. Rapidly acquired and implemented new tech stacks to meet evolving project requirements.',
  },
  {
    role: 'Mechanical Engineer',
    company: 'Paras Power / Adani Enterprises Ltd',
    location: null,
    period: 'Jul 2017 – Dec 2019',
    desc: 'Applied engineering principles and analytical problem-solving to industrial projects at Paras Power and Jai Shakti Engineering (Adani Enterprises Ltd.).',
  },
];

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="experience" sx={{ py: { xs: 6, md: 10 } }}>
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
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #8b5cf6, #ec4899, transparent)',
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        Experience
      </Typography>

      <Box
        sx={{
          position: 'relative',
          pl: isMobile ? 0 : 4,
          '&::before': isMobile
            ? {}
            : {
                content: '""',
                position: 'absolute',
                left: 7,
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #8b5cf6, #ec4899, transparent)',
                borderRadius: 1,
              },
        }}
      >
        {experiences.map((exp, idx) => (
          <Box
            key={idx}
            className="glass-card hover-lift"
            sx={{
              mb: 3,
              p: 3,
              borderRadius: 2,
              position: 'relative',
              '&:hover': {
                borderColor: 'var(--border-accent)',
              },
            }}
          >
            {!isMobile && (
              <Box
                sx={{
                  position: 'absolute',
                  left: -25,
                  top: 28,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  boxShadow: '0 0 16px rgba(139, 92, 246, 0.5), 0 0 24px rgba(236, 72, 153, 0.3)',
                }}
              />
            )}
            <Typography
              sx={{
                color: '#a78bfa',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '1.1rem',
                mb: 0.5,
              }}
            >
              {exp.period}
            </Typography>
            <Typography
              sx={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                mb: 1,
              }}
            >
              {exp.role}
            </Typography>
            <Typography
              sx={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                mb: 1.5,
              }}
            >
              {exp.company}
              {exp.location && ` • ${exp.location}`}
            </Typography>
            <Typography
              sx={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              {exp.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Experience;
