import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger" | "success";
}

export function Button(props: ButtonProps) {
  return <ButtonContainer variant={color}>Button</ButtonContainer>;
}
