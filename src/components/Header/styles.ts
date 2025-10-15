import styled from "styled-components";

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

    &.rooms-page {
        justify-content: center;
    }
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
`