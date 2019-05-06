import styled from "styled-components";

export const MonthItemWrap = styled.div`
  display: flex;
  flex: 1 1 14%;
  border-right: 1px solid #ddd;
  box-sizing: border-box;
  
  &:last-of-type  {
    border-right: 0;  
  }
`;
