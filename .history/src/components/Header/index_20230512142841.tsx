import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <a href="">timer</a>
        <a href="">history</a>
      </nav>
    </HeaderContainer>
  );
}
