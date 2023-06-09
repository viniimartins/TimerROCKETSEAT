import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { Timer, Scroll } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
