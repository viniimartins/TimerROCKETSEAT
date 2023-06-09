import styled from "styled-components";

type ButtonVariant = "primary" | "secondary" | "danger" | "success";


interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
`;
