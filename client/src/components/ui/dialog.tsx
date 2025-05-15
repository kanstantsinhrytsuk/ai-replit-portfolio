import * as React from "react";
import { 
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogContentText as MuiDialogContentText,
  DialogTitle as MuiDialogTitle,
  IconButton,
  Backdrop,
  styled,
  SxProps,
  Theme
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

// Styled components for Dialog
const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius * 1.5,
    boxShadow: theme.shadows[10],
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(2px)',
  }
}));

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => (
  <StyledDialog 
    open={open} 
    onClose={() => onOpenChange(false)}
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    {children}
  </StyledDialog>
);

// Dialog Trigger
interface DialogTriggerProps {
  onClick: () => void;
  children: React.ReactNode;
}

const DialogTrigger = ({ onClick, children }: DialogTriggerProps) => (
  <div onClick={onClick}>
    {children}
  </div>
);

// Dialog Content
interface DialogContentProps {
  children: React.ReactNode;
  onClose?: () => void;
  sx?: SxProps<Theme>;
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, onClose, sx, ...props }, ref) => (
    <MuiDialogContent 
      ref={ref}
      sx={{ 
        position: 'relative',
        pt: 4,
        px: 4,
        pb: 3,
        ...sx
      }}
      {...props}
    >
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 12,
            top: 12,
            color: 'text.secondary',
          }}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
      {children}
    </MuiDialogContent>
  )
);
DialogContent.displayName = "DialogContent";

// Dialog Header
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>;
}

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ children, sx, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '16px',
        ...(sx as any)
      }}
      {...props}
    >
      {children}
    </div>
  )
);
DialogHeader.displayName = "DialogHeader";

// Dialog Footer
interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>;
}

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ children, sx, ...props }, ref) => (
    <MuiDialogActions
      ref={ref}
      sx={{
        justifyContent: 'flex-end',
        gap: 1,
        mt: 2,
        ...sx
      }}
      {...props}
    >
      {children}
    </MuiDialogActions>
  )
);
DialogFooter.displayName = "DialogFooter";

// Dialog Title
interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  sx?: SxProps<Theme>;
}

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ children, sx, ...props }, ref) => (
    <MuiDialogTitle
      ref={ref}
      sx={{
        fontSize: '1.25rem',
        fontWeight: 600,
        mb: 1,
        ...sx
      }}
      {...props}
    >
      {children}
    </MuiDialogTitle>
  )
);
DialogTitle.displayName = "DialogTitle";

// Dialog Description
interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  sx?: SxProps<Theme>;
}

const DialogDescription = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ children, sx, ...props }, ref) => (
    <MuiDialogContentText
      ref={ref}
      sx={{
        color: 'text.secondary',
        fontSize: '0.875rem',
        mb: 2,
        ...sx
      }}
      {...props}
    >
      {children}
    </MuiDialogContentText>
  )
);
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
};