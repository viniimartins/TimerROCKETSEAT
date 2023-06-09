import { ButtonVariant } from './../../.history/src/components/Button.styles_20230510165045';
import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}


const ButtonVariants = {
    primary: "purble",
    secondary: "orange",
    danger: "red",
    success: "green"
}


export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
`;
