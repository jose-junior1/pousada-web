import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #eeee;

    .link-home {
        font-size: 24px;
        text-decoration: none;
        color: #474747ff;
    }

    span {
        color: #2876beff;
    }

    

    .is-active {
        opacity: 1;
        pointer-events: all;
    }


    ${breakpoints.mobile`
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        width: 100%;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-100%);
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        background-color: rgba(0, 0, 0, 0.8);
        height: auto;
        padding: 16px 0;

        .link-home {
            color: #fff;
        }

        span {
            color: #71b7f8ff;
        } 

        &.is-active {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
        }
    `}
`

export const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;

    li {
        text-transform: uppercase;
        transition: border-bottom 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
            border-bottom: 2px solid #111;
        }

        a {
            color: #111;
            font-weight: bold;
            text-decoration: none;
        }
    }

    ${breakpoints.mobile`
        flex-direction: column;
        gap: 30px;
        margin-top: 30px;

        li {
            a {
                color: #fff;
            }
        }
    `}
`