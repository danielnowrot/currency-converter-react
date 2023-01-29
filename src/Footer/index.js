import { StyledFooter } from "./styled";

const Footer = ({ title, ratesData }) => (
  <StyledFooter>
    {title}{ratesData.date}
  </StyledFooter>
);

export default Footer;