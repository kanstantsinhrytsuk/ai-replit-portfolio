import * as React from "react";
import { 
  Avatar as MuiAvatar, 
  Box,
  SxProps, 
  Theme
} from "@mui/material";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, sx, ...props }, ref) => (
    <Box 
      ref={ref}
      component="span"
      sx={{ 
        display: 'inline-flex',
        position: 'relative',
        width: '40px',
        height: '40px',
        flexShrink: 0,
        borderRadius: '50%',
        overflow: 'hidden',
        ...sx 
      }}
      {...props}
    />
  )
);
Avatar.displayName = "Avatar";

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sx?: SxProps<Theme>;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ alt, src, sx, ...props }, ref) => (
    <MuiAvatar
      ref={ref}
      src={src}
      alt={alt || "Avatar"}
      sx={{ 
        width: '100%',
        height: '100%',
        ...sx
      }}
      {...props}
    />
  )
);
AvatarImage.displayName = "AvatarImage";

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>;
}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ children, sx, ...props }, ref) => (
    <MuiAvatar
      ref={ref}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'action.selected',
        color: 'text.primary',
        fontSize: '1rem',
        fontWeight: 500,
        ...sx
      }}
      {...props}
    >
      {children}
    </MuiAvatar>
  )
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
