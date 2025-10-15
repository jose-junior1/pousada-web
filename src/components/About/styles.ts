import styled from "styled-components";

export const Section = styled.div`
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e9e9e9ff;

    h3 {
        font-size: 32px;
        text-transform: uppercase;
    }

    .text {
        margin: 40px 0 60px 0;
    }
`

export const Container = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 40px;
`

export const Box = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    h4 {
        font-size: 18px;
        margin-bottom: 30px;
    }

    img {
        width: 200px;
        height: 200px;
    }
`