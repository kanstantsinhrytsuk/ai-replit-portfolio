import * as React from "react";
import { Box, SxProps, Theme } from "@mui/material";

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
  sx?: SxProps<Theme>;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1 / 1, style, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          position: 'relative',
          width: '100%',
          '&::before': {
            content: '""',
            display: 'block',
            height: 0,
            paddingBottom: `${(1 / ratio) * 100}%`,
          },
          '& > *': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          },
          '& > img, & > video': {
            objectFit: 'cover',
          },
          ...sx,
        }}
        {...props}
      />
    );
  }
);

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
