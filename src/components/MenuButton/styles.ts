import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Menu = styled.button`
    position: fixed;
    right: 8px;
    top: 8px;
    width: 50px;
    height: 50px;
    padding: 8px;
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    z-index: 2;

    span {
        background-color: #fff;
        height: 3px;
    }

    b {
        color: #fff;
        font-size: 32px;
    }

    ${breakpoints.mobile`
        display: flex;
    `}
`