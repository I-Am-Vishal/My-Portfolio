import { Box, Typography } from '@mui/material';
import { Icon } from '@mdi/react';
import {
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLanguagePython,
  mdiReact,
  mdiVuejs,
  mdiNuxt,
  mdiFlask,
  mdiDatabase,
  mdiNodejs,
} from '@mdi/js';

const techGroups = [
  {
    title: 'Languages',
    barColor: 'lang',
    items: [
      { name: 'Python', icon: mdiLanguagePython, percent: 72 },
      { name: 'JavaScript', icon: mdiLanguageJavascript, percent: 78 },
      { name: 'TypeScript', icon: mdiLanguageTypescript, percent: 65 },
    ],
  },
  {
    title: 'Frontend',
    barColor: 'frontend',
    items: [
      { name: 'React.js', icon: mdiReact, percent: 85 },
      { name: 'Next.js', icon: mdiReact, percent: 78 },
      { name: 'Vue.js', icon: mdiVuejs, percent: 94 },
      { name: 'Nuxt.js', icon: mdiNuxt, percent: 92 },
    ],
  },
  {
    title: 'Backend',
    barColor: 'backend',
    items: [
      { name: 'Flask', icon: mdiFlask, percent: 45 },
      { name: 'Django', icon: mdiLanguagePython, percent: 48 },
      { name: 'Express.js', icon: mdiNodejs, percent: 42 },
      { name: 'Nest.js', icon: mdiNodejs, percent: 38 },
    ],
  },
];

function Technologies() {
  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 10 } }}>
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
            background: 'linear-gradient(90deg, var(--accent), transparent)',
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        Technologies
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 700 }}>
        {techGroups.map((group, gIdx) => (
          <Box key={gIdx} className="animate-fade-in-up" sx={{ animationDelay: `${gIdx * 0.1}s` }}>
            <Typography
              sx={{
                background: group.barColor === 'lang' ? 'linear-gradient(90deg, #ff9800, #ffc107)' : group.barColor === 'frontend' ? 'linear-gradient(90deg, #00d4aa, #00e5c4)' : 'linear-gradient(90deg, #9c27b0, #ba68c8)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '1rem',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: 1.5,
              }}
            >
              {group.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {group.items.map((item, iIdx) => (
                <Box key={iIdx} sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Icon path={item.icon} size={1} color={group.barColor === 'lang' ? '#ff9800' : group.barColor === 'frontend' ? '#00d4aa' : '#9c27b0'} />
                      <Typography
                        sx={{
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 500,
                          fontSize: '0.95rem',
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.percent}%
                    </Typography>
                  </Box>
                  <Box
                    className="skill-progress-bar"
                    sx={{ '--progress-width': `${item.percent}%` }}
                  >
                    <Box
                      className={`skill-progress-fill ${group.barColor}`}
                      sx={{ '--progress-width': `${item.percent}%` }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Technologies;
