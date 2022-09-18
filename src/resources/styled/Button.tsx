import styled from 'styled-components';

export const Button = styled("button")`
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    padding: 10px 10px;

    background-color: #d6cfa5;
    color: #678e5e;

    &:hover {
        opacity: 0.8;
        transform: scale(0.95);
    }

    @media( max-width: 768px ){
        margin-bottom: 15px;
      }
`