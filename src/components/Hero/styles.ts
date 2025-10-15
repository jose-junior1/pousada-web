import styled from "styled-components"

export const Hero = styled.div`
    width: 100%;
    height: 700px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxText = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 30px;
    text-align: center;
    color: #fff;
    background-color: #139489b4;
    border: 1px solid #fff;
    border-radius: 6px;

    h2 {
        font-size: 40px;
    }

    p {
        font-size: 24px;
    }
`