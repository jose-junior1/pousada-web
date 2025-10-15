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
    border-bottom: 2px solid #04818aff;

    img {
        width: 100%;
    }

    h4 {
        margin: 16px 0;
        text-transform: uppercase;
        color: #696868ff;
    }
`