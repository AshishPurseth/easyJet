import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
} from "../Styled-component";
import { headerLeftItems, headerRightItems } from "../constants";

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderLogo></StyledHeaderLogo>
      <StyledHeaderMenu>
        {headerLeftItems?.map((item, index) => (
          <section key={index}>{item.name}</section>
        ))}
      </StyledHeaderMenu>
      <StyledHeaderMenu>
        {headerRightItems?.map((item, index) => (
          <section key={index}>{item.name}</section>
        ))}
      </StyledHeaderMenu>
    </StyledHeader>
  );
}

export default Header;
