import * as React from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";

// Create a styled TextField component that matches our textarea styles
const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  
  '& .MuiInputBase-root': {
    minHeight: '80px',
    width: '100%',
    borderRadius: '0.375rem',
    backgroundColor: theme.palette.background.paper,
    
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
      borderColor: theme.palette.primary.main,
    },
    
    '&.Mui-disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    '& textarea': {
      fontSize: '0.875rem',
      padding: '0.5rem 0.75rem',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider,
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.hover,
    },
  },

  '& .MuiFormLabel-root': {
    display: 'none', // We'll use separate labels usually
  }
}));

// Extend TextField props to accept className for compatibility
interface TextareaProps extends Omit<TextFieldProps, 'variant'> {
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledTextField
        multiline
        variant="outlined"
        fullWidth
        inputRef={ref}
        InputLabelProps={{ shrink: true }}
        {...props}
        sx={{ minHeight: '80px', ...props.sx }}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
