import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: "purble",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;


  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /*   
  ${(props) => {
    return `
      background-color: ${ButtonVariants[props.variant]};
    `;
  }} 
  */


`;
