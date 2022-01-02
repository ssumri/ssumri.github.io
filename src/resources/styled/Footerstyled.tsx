import styled from 'styled-components';

export const SFooter = styled("div")`
    background-color: #555548;
    color: d6cfa5;
    padding: 10px 0 10px;

    ul {
        list-style-type: none;
    }
    
    
    @media (max-width: 768px ){
        text-align: center;
        ul {
            padding: 0;
        }
    }
`