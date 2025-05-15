import * as React from "react";
import {
  FormControl as MuiFormControl,
  FormHelperText,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

// Keep FormProvider for backward compatibility
const Form = FormProvider;

// Form Field Context
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

// Form Field wrapper
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// Form Item Context
type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

// Custom hook to get form field state
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// Form Item component - container for form elements
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <Box 
        ref={ref} 
        sx={{ 
          mb: 2,
          display: 'flex', 
          flexDirection: 'column',
          gap: 1
        }} 
        {...props} 
      />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

// Form Label component
const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }
>(({ className, required, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <InputLabel
      ref={ref}
      htmlFor={formItemId}
      required={required}
      error={!!error}
      sx={{
        fontSize: '0.875rem',
        fontWeight: 500,
        color: error ? 'error.main' : 'text.primary',
        marginBottom: 0.5,
        position: 'relative',
        transform: 'none',
        '&.Mui-focused': {
          color: error ? 'error.main' : 'primary.main',
        }
      }}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

// Form Control component with support for asChild
interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ asChild = false, children, ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    // If asChild is true, we pass props to the child element
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        id: formItemId,
        'aria-describedby': !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`,
        'aria-invalid': !!error,
        ...props,
      } as any);
    }

    // Otherwise wrap in MUI FormControl
    return (
      <MuiFormControl
        ref={ref}
        fullWidth
        error={!!error}
        {...props}
      >
        {children}
      </MuiFormControl>
    );
  }
);
FormControl.displayName = "FormControl";

// Form Description component
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <Typography
      ref={ref}
      id={formDescriptionId}
      variant="caption"
      sx={{ 
        fontSize: '0.75rem',
        color: 'text.secondary',
        mt: 0.5
      }}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

// Form Message component
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <FormHelperText
      ref={ref}
      id={formMessageId}
      error
      sx={{ 
        fontSize: '0.75rem',
        fontWeight: 500,
        mt: 0.5,
        color: 'error.main'
      }}
      {...props}
    >
      {body}
    </FormHelperText>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
