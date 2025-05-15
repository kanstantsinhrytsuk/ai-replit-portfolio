import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

// Define custom variant values in addition to MUI's standard ones
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

// A simple Button component that uses MUI Button but with our custom styling
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
    
    // Style overrides based on variant
    const variantStyles = {
      ...(variant === 'destructive' && {
        backgroundColor: 'error.main',
        color: '#fff',
        '&:hover': {
          backgroundColor: 'error.dark',
        },
      }),
      ...(variant === 'outline' && {
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }),
      ...(variant === 'secondary' && {
        backgroundColor: 'grey.100',
        color: 'grey.900',
        '&:hover': {
          backgroundColor: 'grey.200',
        },
      }),
      ...(variant === 'ghost' && {
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }),
      ...(variant === 'link' && {
        color: 'primary.main',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
          backgroundColor: 'transparent',
        },
      }),
      ...(variant === 'default' && {
        backgroundColor: 'primary.main',
        color: '#fff',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }),
    };
    
    // Style overrides based on size
    const sizeStyles = {
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
    };
    
    // Base styles for all buttons
    const baseStyles = {
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
    };
    
    return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        size={muiSize}
        disableElevation
        className={className}
        sx={{
          ...baseStyles,
          ...sizeStyles,
          ...variantStyles,
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// For compatibility with existing code
const buttonVariants = () => "";

export { Button, buttonVariants };
