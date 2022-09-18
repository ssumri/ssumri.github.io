import styled from 'styled-components';

export const SHeader = styled("header")`
  background-color: #f3e6cd;
  padding: 0px 5px;

  h1 {
    color: #92413a;
    font-size: 50px;
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
    color: #60412b;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  &:hover{
    opacity: 0.8;
    transform: scale(0.95);
    color: #06170e;
  }

`

