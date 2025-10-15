import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`

export const ContainerText = styled.div`
    text-align: center;

    h3 {
        font-size: 32px;
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 20px;
    }
`

export const ContainerRooms = styled.article`
    max-width: 80%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`

export const BoxRooms = styled.div`
    width: 100%;
    text-align: center;
    padding-bottom: 16px;
    border-bottom: 2px solid #04818aff;

    img {
        width: 100%;
        margin-bottom: 16px;
    }
`

export const LinkItem = styled(HashLink)`
    text-transform: uppercase;
    color: #383838ff;
    text-decoration: none;

    &:hover {
        color: #111;
    }
`