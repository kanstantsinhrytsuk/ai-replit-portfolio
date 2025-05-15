import { useState } from "react";
import { Link as RouterLink, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  Typography, 
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';

interface HeaderProps {
  onContactClick: () => void;
}

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, label, isActive, onClick }: NavLinkProps) => (
  <Button
    component={RouterLink}
    to={href}
    onClick={onClick}
    sx={{
      color: isActive ? 'primary.main' : 'text.primary',
      fontWeight: 500,
      fontSize: '0.875rem',
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'primary.main',
      },
      textTransform: 'none',
    }}
  >
    {label}
  </Button>
);

const Header = ({ onContactClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#skills", label: "Skills" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return location === href;
    if (href.startsWith("/#")) return location === "/";
    return location.startsWith(href);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={1} 
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1, px: 0 }}>
          <Box 
            component={RouterLink} 
            to="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: 'primary.main', 
                width: 40, 
                height: 40,
                borderRadius: 2,
                fontWeight: 'bold'
              }}
            >
              CM
            </Avatar>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold" 
              fontFamily="'Poppins', sans-serif"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Cristian Muffat
            </Typography>
          </Box>

          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(link.href)}
              />
            ))}
          </Box>

          <Button
            variant="contained"
            onClick={onContactClick}
            sx={{
              ml: { xs: 'auto', md: 2 },
              mr: { xs: 2, md: 0 },
              px: 2,
              py: 1,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Contact Me
          </Button>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            sx={{ display: { md: 'none' } }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="top"
        open={isMobileMenuOpen && isMobile}
        onClose={closeMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            top: '64px',
            width: '100%',
            boxShadow: 2
          },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={link.href}
                onClick={closeMobileMenu}
                sx={{
                  py: 1.5,
                  color: isLinkActive(link.href) ? 'primary.main' : 'inherit'
                }}
              >
                <ListItemText 
                  primary={link.label} 
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: '0.875rem'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
