import * as React from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";

// Create a styled TextField component that matches our input styles
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '2.5rem', // h-10
    width: '100%',
    borderRadius: '0.375rem', // rounded-md
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
      borderColor: theme.palette.primary.main,
    },
    
    '&.Mui-disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    '& input': {
      fontSize: '0.875rem',
      padding: '0.5rem 0.75rem', // px-3 py-2
      height: '100%',
      boxSizing: 'border-box',
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
interface InputProps extends Omit<TextFieldProps, 'variant'> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", size = "medium", ...props }, ref) => {
    return (
      <StyledTextField
        type={type}
        size={size}
        variant="outlined"
        fullWidth
        inputRef={ref}
        InputLabelProps={{ shrink: true }}
        sx={{ ...props.sx }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
