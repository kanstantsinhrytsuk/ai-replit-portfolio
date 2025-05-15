import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Stack,
  Backdrop
} from "@mui/material";
import { Snackbar, Alert } from "@mui/material";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    setSnackbarOpen(true);
    form.reset();
    onClose();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog 
        open={isOpen} 
        onClose={onClose} 
        maxWidth="sm" 
        fullWidth
        components={{
          Backdrop: (props) => (
            <Backdrop {...props} sx={{ backdropFilter: 'blur(4px)' }} />
          )
        }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
            m: 2
          }
        }}
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontWeight="bold" fontFamily="'Poppins', sans-serif">
              Contact Me
            </Typography>
            <IconButton onClick={onClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack spacing={3} mt={1}>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Your Name"
                    placeholder="John Doe"
                    variant="outlined"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                    variant="outlined"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              
              <Controller
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Message"
                    placeholder="Your message here..."
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              
              <Button 
                type="submit" 
                variant="contained"
                sx={{ 
                  py: 1.5, 
                  bgcolor: 'hsl(270, 76%, 60%)',
                  '&:hover': { bgcolor: 'hsl(270, 76%, 50%)' },
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 'medium',
                  fontSize: '1rem'
                }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Message sent! Thank you for your message. I'll get back to you soon.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactModal;
