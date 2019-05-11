import styled, { css, keyframes } from "styled-components";

import { ProcedureTypes } from "constants/Common";

const prevAction = [
    keyframes`
        from  {right: 2rem; opacity: .3; border-left-width: 1px;}
        to  {right: 0; opacity: 1; border-left-width: 0;}
    `,
    keyframes`
        from  {right: 2rem; opacity: .3; border-left-width: 1px; display: block}
        to  {right: 0; opacity: 1; border-left-width: 0;}
    `
];
const nextAction = [
    keyframes`
        from  {left: 2rem; opacity: .3; border-left-width: 1px;}
        to  {left: 0; opacity: 1; border-left-width: 0;}
    `,
    keyframes`
        from  {left: 2rem; opacity: .3; border-left-width: 1px; display: block;}
        to  {left: 0; opacity: 1; border-left-width: 0;}
    `
];

interface MonthCalendarWrapProps {
    action: ProcedureTypes;
    month: number;
}

export const MonthCalendarWrap = styled.article<MonthCalendarWrapProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    align-items: baseline;
    height: 100%;
    width: 100%;
    border: 0 solid #eaeaea;

    ${({ action, month }) => {
        const type = month % 2;
        switch (action) {
            case ProcedureTypes.PREV:
                return css`
                    animation: ${prevAction[type]} 0.2s ease-out;
                `;
            case ProcedureTypes.NEXT:
                return css`
                    animation: ${nextAction[type]} 0.2s ease-out;
                `;
        }
    }}
`;

export const MonthList = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #ddd;

    &:last-of-type {
        border-bottom: 0;
    }
`;

export const WeekList = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 1rem;
    justify-content: space-between;
    width: 100%;

    & > div {
        flex: 1 1 14%;
        padding-top: 0.7rem;
        box-sizing: border-box;
        font-size: 0.8rem;
        color: #666;
        text-align: center;
        border-right: 1px solid #ddd;

        &:last-of-type {
            border-right: 0;
        }
    }
`;
