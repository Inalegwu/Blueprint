import { Button, TextField } from "@radix-ui/themes";
import { useField, useIsSubmitting } from "remix-validated-form";

type InputProps = {
  name: string;
  label: string;
  slot?: () => JSX.Element;
  className?: string;
  type?:
    | "number"
    | "search"
    | "time"
    | "text"
    | "hidden"
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "password"
    | "tel"
    | "url"
    | "week";
};

export function Input({
  label,
  name,
  slot: Slot,
  className,
  type,
}: InputProps) {
  const { getInputProps, error } = useField(name);

  return (
    <TextField.Root
      className={className}
      {...getInputProps({ id: name, type })}
      placeholder={label}
    >
      {Slot && (
        <TextField.Slot>
          <Slot />
        </TextField.Slot>
      )}
    </TextField.Root>
  );
}

type SubmitType = {
  children: React.ReactNode;
  className?: string;
};

export function Submit({ children, className }: SubmitType) {
  const isSubmitting = useIsSubmitting();
  return (
    <Button
      className={className}
      loading={isSubmitting}
      disabled={isSubmitting}
      variant="soft"
    >
      {children}
    </Button>
  );
}
