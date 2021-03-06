import styled, { css } from "styled-components";

const LeftPanelWrap = styled.section<{ show?: boolean }>`
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    transition: flex-basis 0.3s;
    border-right: 1px solid #ddd;
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    flex-shrink: 0;

    ${(props) =>
        props.show &&
        css`
            flex-basis: 19rem;
        `}
`;

export { LeftPanelWrap };
