import styled from "styled-components";

export const MonthItemWrap = styled.div`
    flex: 1 1 14%;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    padding: 0.5rem;

    &:last-of-type {
        border-right: 0;
    }
`;

interface DateTextProps {
    different: boolean;
    today: boolean;
}

export const DateText = styled.p<DateTextProps>`
    text-align: center;
    font-size: 0.8rem;
    color: ${({ different }) => (!different ? "#333" : "#666")};
    font-weight: bold;
`;
