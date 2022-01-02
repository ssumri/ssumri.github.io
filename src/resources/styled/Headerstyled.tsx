import styled from 'styled-components';

export const SHeader = styled("header")`
  background-color: #c5c4b2;
  padding: 20px 10px;

  h1 {
    color: #60412b
  }
`

export const Nav = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media( max-width: 768px ){
    flex-direciton: column;
  }
`

export const StyledSocialIcons = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #60412b;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`

