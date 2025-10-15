import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 100px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    h3 {
        font-size: 32px;
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 60px;
    }

    ${breakpoints.mobile`
        padding: 100px 16px;
    `}
`

export const BoxImage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 90px;

    img {
        max-width: 400px;
        width: 100%;
        height: 260px;
        object-fit: cover;
    }

    ${breakpoints.mobile`
        grid-template-columns: 1fr;
    `}
`

export const BoxText = styled.article`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        list-style: disc;

        li {
            width: 25%;
            text-align: left;
            margin-top: 10px;
        }
    }

    h4 {
        font-size: 24px;
        padding-bottom: 30px;
    }

    ${breakpoints.mobile`
        width: 100%;

        ul {
            max-width: 100%;
            width: 100%;
            flex-direction: column;

            li {
                margin-left: 20px;
                width: 100%;
            }
        }
    `}
`