import styled from "styled-components";

export const MonthCalendarWrap = styled.article`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  align-items: baseline;
  height: 100%;
  width: 100%;
`;

export const MonthList = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  width:100%;
  border-bottom: 1px solid #ddd;
  
  &:last-of-type  {
    border-bottom: 0;
  }
`;
