import styled, { css } from "styled-components";
import { Menu } from "styled-icons/boxicons-regular/Menu";

export const HeaderWrap = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: 1px solid #ddd;
    background: white;

    height: 4.5rem;
    box-sizing: border-box;
    padding: 0.5rem;
`;

export const LeftWrap = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-basis: 17rem;
    box-sizing: border-box;
`;

export const RightWrap = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;
`;

export const MenuBtn = styled(Menu)<{ show?: boolean }>`
    color: #bcbcbc;
    cursor: pointer;
    transition: color 0.3s, background 0.3s;
    border-radius: 50%;
    background: initial;
    padding: 0.5rem;

    &:hover {
        color: #2a2a2a;
        background: #efefef;
    }

    ${(props) =>
        props.show &&
        css`
            color: #2a2a2a;
        `}
`;

export const MenuName = styled.h1`
    color: #888;
    font-size: 1.35rem;
    margin-left: 0.5rem;
`;
