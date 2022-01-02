import styled from 'styled-components';

export const Button = styled("button")`
    border-radius: 75px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    padding: 15px 15px;

    background-color: #d6cfa5;
    color: #364d32;

    &:hover {
        opacity: 0.8;
        transform: scale(0.95);
    }

    @media( max-width: 768px ){
        margin-bottom: 15px;
      }
`