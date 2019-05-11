import styled, { css, keyframes } from "styled-components";

import { ProcedureTypes } from "constants/Common";

export const CalendarWrap = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const actionKeyframe = (action: ProcedureTypes, date: string) => {
    switch (action) {
        case ProcedureTypes.PREV:
            return keyframes`
                /* ${date} */
                from  {right: 2rem; opacity: .3; border-left-width: 1px;}
                to  {right: 0; opacity: 1; border-left-width: 0;}
            `;
        case ProcedureTypes.NEXT:
            return keyframes`
                /* ${date} */
                from  {left: 2rem; opacity: .3; border-left-width: 1px;}
                to  {left: 0; opacity: 1; border-left-width: 0;}
            `;
    }
};

interface CalendarAniWrapProps {
    action: ProcedureTypes;
    date: string;
}

export const CalendarAniWrap = styled.article<CalendarAniWrapProps>`
    position: relative;
    height: 100%;
    width: 100%;
    border: 0 solid #eaeaea;

    ${({ action, date }) => css`
        animation: ${actionKeyframe(action, date)} 0.3s ease-out;
    `}
`;
