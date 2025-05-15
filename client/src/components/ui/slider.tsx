import * as React from "react";
import { Slider as MuiSlider, SxProps, Theme, alpha } from "@mui/material";

interface SliderProps {
  defaultValue?: number | number[];
  max?: number;
  min?: number;
  step?: number;
  value?: number | number[];
  onChange?: (event: Event, value: number | number[]) => void;
  onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | number[]) => void;
  disabled?: boolean;
  marks?: boolean | { value: number; label?: string }[];
  valueLabelDisplay?: 'on' | 'auto' | 'off';
  orientation?: 'horizontal' | 'vertical';
  sx?: SxProps<Theme>;
  className?: string;
}

const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  ({ sx, className, ...props }, ref) => (
    <MuiSlider
      ref={ref}
      sx={{
        height: 8,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
          height: 20,
          width: 20,
          backgroundColor: 'background.paper',
          border: '2px solid',
          borderColor: 'primary.main',
          '&:focus, &:hover, &.Mui-active': {
            boxShadow: `0 0 0 8px ${alpha('#1976d2', 0.16)}`,
          },
          '&.Mui-disabled': {
            pointerEvents: 'none',
            opacity: 0.5,
          },
        },
        '& .MuiSlider-track': {
          height: 8,
          backgroundColor: 'primary.main',
        },
        '& .MuiSlider-rail': {
          height: 8,
          backgroundColor: 'action.selected',
          borderRadius: 4,
        },
        ...sx
      }}
      {...props}
    />
  )
);

Slider.displayName = "Slider";

export { Slider };
