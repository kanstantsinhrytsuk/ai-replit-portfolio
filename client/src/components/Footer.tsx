import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  Stack
} from '@mui/material';

// Define the animation keyframes in CSS
const keyframes = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

const Footer = () => {
  const socialLinks = [
    { icon: <InstagramIcon fontSize="small" />, url: "#", label: "Instagram" },
    { icon: <FacebookIcon fontSize="small" />, url: "#", label: "Facebook" },
    { icon: <LinkedInIcon fontSize="small" />, url: "#", label: "LinkedIn" },
    { icon: <TwitterIcon fontSize="small" />, url: "#", label: "Twitter" },
  ];

  return (
    <Box
      component="footer"
      sx={{ 
        bgcolor: '#f5f5ff',
        pt: 8, 
        pb: 4, 
        px: 2,
        position: 'relative'
      }}
    >
      {/* Add keyframes styles to the document */}
      <style>{keyframes}</style>
      
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          mb={5}
          sx={{ 
            animation: 'fadeInUp 0.6s ease-out'
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              component="a"
              href={social.url}
              aria-label={social.label}
              sx={{
                bgcolor: 'white',
                boxShadow: 2,
                color: 'text.secondary',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-5px)',
                },
                width: 40,
                height: 40,
                transition: 'transform 0.2s ease-out, background-color 0.2s ease-out, color 0.2s ease-out',
                animationName: 'fadeInUp',
                animationDuration: '0.5s',
                animationTimingFunction: 'ease-out',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>
        
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ 
            animationName: 'fadeIn',
            animationDuration: '0.6s',
            animationTimingFunction: 'ease-out',
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}
        >
          Cristian Muffat Portfolio Company © @cristianmuffat • {new Date().getFullYear()}
        </Typography>
        
        <Box 
          sx={{ 
            position: 'absolute',
            right: 4, 
            bottom: 4,
            width: 80,
            height: 80,
            opacity: 0.3,
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 2px)',
            backgroundSize: '15px 15px'
          }} 
        />
      </Container>
    </Box>
  );
};

export default Footer;
