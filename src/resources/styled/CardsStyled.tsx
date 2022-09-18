import styled from 'styled-components';

export const SCard = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d2beb0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 5px 2px ;
    padding: 0px;
    flex-direction: column;

    hr {
        color: #60412b;
        border-style: solid;
    }
    h2 {
        color: #364d32;
        font-size: 32px;
        font-weight: 900;
        justify-content: center;
        padding-left: 10px;
        border-bottom: 1px solid black;
        width: 100%;
    }
    h4 {
        color: #364d32;
        font-size: 20px;
        font-weight: 700;
        padding-left: 10px;
    }
    p{
        color: #364d32;
        font-size: 16px;
        font-weight: 600;
        padding-left: 10px;
    }

    & > div {
        flex: 1;
    }

`

export const ListCard = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d2beb0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 5px 2px ;
    padding: 0px;

    ul {
        justify-content: center;
        color: #364d32;
        font-size: 32px;
        font-weight: 900;
    }
    li {
        list-style-type: none;
        border-radius: 20px;
        border: 2px #d2beb0;
        border-style: solid;
        margin: 5px 5px ;
        padding: 0px;
        font-size: 20px;
        font-weight: 700;
        flex-direction: row;

        &:hover {
        opacity: 0.8;
        transform: scale(0.98);
        }
    }

    & > div {
        flex: 1;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }
`