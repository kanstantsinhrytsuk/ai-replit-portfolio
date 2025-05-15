import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PortfolioDetail from "@/pages/PortfolioDetail";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(270, 76%, 60%)', // purple
    },
    secondary: {
      main: 'hsl(240, 76%, 64%)', // blue
    },
    background: {
      default: '#f5f5ff',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio/:id" component={PortfolioDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="min-h-screen flex flex-col">
          <Header onContactClick={openContactModal} />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Router />
            </AnimatePresence>
          </main>
          <Footer />
          <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
