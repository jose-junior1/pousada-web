import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px 0;
    background-color: #09ad84ff;
    color: #fff;

    div {
        width: 100%;
        display: flex;
        gap: 50px;
        justify-content: center;
        border-bottom: 1px solid #19946bff;

        h4 {
            font-size: 24px;
            width: 300px;
        }
    }

    .copy {
        font-size: 18px;
    }
`

export const ListContact = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
    padding-bottom: 40px;

    a {
        text-decoration: none;
        color: #fff;
    }

    li {
        max-width: 300px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
    }
`