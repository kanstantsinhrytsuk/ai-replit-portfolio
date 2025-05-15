import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps, SxProps, Theme } from "@mui/material";

// Define custom variant values in addition to MUI's standard ones
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

// A simplified Button component that uses MUI Button with consistent styling
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', asChild = false, className, sx, ...props }, ref) => {
    // Determine MUI variant
    let muiVariant: 'contained' | 'outlined' | 'text';
    switch (variant) {
      case 'outline':
        muiVariant = 'outlined';
        break;
      case 'ghost':
      case 'link':
        muiVariant = 'text';
        break;
      default:
        muiVariant = 'contained';
    }
    
    // Determine proper MUI size
    let muiSize: "small" | "medium" | "large";
    if (size === 'sm') muiSize = 'small';
    else if (size === 'lg') muiSize = 'large';
    else muiSize = 'medium';
    
    // Create combined style object
    const combinedSx: SxProps<Theme> = {
      // Base styles
      borderRadius: '0.375rem',
      textTransform: 'none',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      whiteSpace: 'nowrap',
      '&:disabled': {
        pointerEvents: 'none',
        opacity: 0.5,
      },
      '& svg': {
        pointerEvents: 'none',
        width: '1rem',
        height: '1rem',
        flexShrink: 0,
      },
      
      // Size-based styles
      ...(size === 'sm' && {
        height: '2.25rem',
        padding: '0 0.75rem',
        fontSize: '0.875rem',
      }),
      ...(size === 'lg' && {
        height: '2.75rem',
        padding: '0 2rem',
        fontSize: '0.875rem',
      }),
      ...(size === 'icon' && {
        height: '2.5rem',
        width: '2.5rem',
        padding: 0,
        minWidth: 'auto',
      }),
      ...(size === 'default' && {
        height: '2.5rem',
        padding: '0 1rem',
        fontSize: '0.875rem',
      }),
      
      // Variant-based styles
      ...(variant === 'destructive' && {
        bgcolor: 'error.main',
        color: '#fff',
        '&:hover': {
          bgcolor: 'error.dark',
        },
      }),
      ...(variant === 'outline' && {
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }),
      ...(variant === 'secondary' && {
        bgcolor: 'grey.100',
        color: 'grey.900',
        '&:hover': {
          bgcolor: 'grey.200',
        },
      }),
      ...(variant === 'ghost' && {
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }),
      ...(variant === 'link' && {
        color: 'primary.main',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
          bgcolor: 'transparent',
        },
      }),
      ...(variant === 'default' && {
        bgcolor: 'primary.main',
        color: '#fff',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }),
      
      // User-provided sx styles
      ...(sx || {}),
    };
    
    return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        size={muiSize}
        disableElevation
        className={className}
        sx={combinedSx}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// For compatibility with existing code
const buttonVariants = () => "";

export { Button, buttonVariants };
