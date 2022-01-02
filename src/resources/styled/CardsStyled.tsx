import styled from 'styled-components';

export const SCard = styled("div")`
    display: flex;
    align-items: center;
    background-color: #d2beb0;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;

    & > div {
        flex: 1;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }
`