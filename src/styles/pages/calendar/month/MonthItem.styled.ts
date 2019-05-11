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
    font-weight: bold;

    & > span {
        cursor: pointer;
        display: inline-block;
        line-height: 1.3rem;
        min-width: 1.7rem;
        min-height: 1.7rem;
        box-sizing: border-box;
        color: ${({ different, today }) =>
            different ? "#666" : today ? "white" : "#333"};
        background: ${({ today }) => (today ? "#5a5aff" : "transparent")};
        padding: 0.2rem;
        border-radius: 1rem;
        transition: background 0.3s;

        &:hover {
            background: ${({ today }) => (today ? "#3c3cb4" : "#eaeaea")};
        }
    }
`;
