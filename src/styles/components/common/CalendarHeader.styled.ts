import styled from "styled-components";
import { Button, FormControl } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "styles/icons.styled";

export const CalendarHeaderWrap = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1 1 auto;
`;

export const TypeFormControl = styled(FormControl)`
    display: flex;
    align-items: stretch;
    height: 2.7rem;

    .outline-input {
        height: 2.7rem;

        .MuiOutlinedInput-input-20,
        .MuiSelect-root-5 {
            box-sizing: border-box;
            line-height: 0;
            height: 2.7rem;
        }
    }
`;

export const DateWrap = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1 1 auto;

    & > * {
        margin: 0 0.5rem;
    }
`;

export const TodayButton = styled(Button)`
    min-width: 1rem !important;
    margin-right: 0.5rem !important;
`;

export const ArrowWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 1rem;

    ${ChevronLeft}, ${ChevronRight} {
        border-radius: 50%;
        cursor: pointer;
        width: 1.5rem;
        transition: background-color 0.3s;
        background: initial;
        padding: 0.5rem;
        color: #666;

        &:hover {
            background: #efefef;
        }
    }
`;

export const DateText = styled.span`
    font-size: 1.35rem;
    color: #606060;
`;

export const MenuWrap = styled.article`
    display: flex;
    flex-direction: row-reverse;
    flex-basis: 10rem;
    align-items: center;

    & > * {
        margin: 0 0.5rem;
    }
`;
