import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;

    ${breakpoints.mobile`
        padding: 100px 16px;
    `}
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

    ${breakpoints.mobile`
        grid-template-columns: 1fr;
        gap: 60px;
        max-width: 100%;
        width: 100%;
    `}
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

    ${breakpoints.mobile`
        width: 100%;
    `}
`

export const LinkItem = styled(HashLink)`
    text-transform: uppercase;
    color: #383838ff;
    text-decoration: none;

    &:hover {
        color: #111;
    }

    ${breakpoints.mobile`
        font-size: 18px;
        font-weight: bold;
    `}
`