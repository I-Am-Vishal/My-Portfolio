import { Box, Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contacts = [
  { label: 'Email', value: 'rajvish7774@gmail.com', href: 'mailto:rajvish7774@gmail.com', Icon: EmailIcon },
  { label: 'Phone', value: '+91 7566782670', href: 'tel:+917566782670', Icon: PhoneIcon },
  { label: 'Location', value: 'Ambikapur, Chhattisgarh, India', href: null, Icon: LocationOnIcon },
];

function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 } }}>
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
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4, transparent)',
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        Get in Touch
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 480 }}>
        {contacts.map((c, idx) => (
          <Box
            key={idx}
            className="glass-card hover-lift"
            component={c.href ? 'a' : 'div'}
            href={c.href}
            target={c.href ? '_blank' : undefined}
            rel={c.href ? 'noopener noreferrer' : undefined}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2.5,
              borderRadius: 2,
              textDecoration: 'none',
              cursor: c.href ? 'pointer' : 'default',
              transition: 'all 0.3s var(--ease-out-expo)',
              '&:hover': { borderColor: 'var(--border-accent)' },
            }}
          >
            <c.Icon sx={{ color: '#3b82f6', fontSize: 28 }} />
            <Box>
              <Typography sx={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {c.label}
              </Typography>
              <Typography
                sx={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                }}
              >
                {c.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Contact;
