import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
      <TooltipProvider>
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
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
