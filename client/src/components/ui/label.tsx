import * as React from "react";
import { InputLabel as MuiInputLabel, SxProps, Theme } from "@mui/material";

// Basic Label component using MUI InputLabel
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  sx?: SxProps<Theme>;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, disabled, error, sx, ...props }, ref) => (
    <MuiInputLabel
      ref={ref}
      required={required}
      error={error}
      sx={{
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.5,
        cursor: disabled ? 'not-allowed' : 'default',
        opacity: disabled ? 0.7 : 1,
        color: error ? 'error.main' : 'text.primary',
        position: 'relative',
        transform: 'none',
        '&.Mui-focused': {
          color: error ? 'error.main' : 'primary.main',
        },
        ...sx
      }}
      {...props}
    />
  )
);

Label.displayName = "Label";

export { Label };
