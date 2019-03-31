import styled, { css } from "styled-components";

const LeftPanelWrap = styled.section<{show?: boolean}>`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  transition: flex-basis .3s;
  border-right:1px solid #ddd;
  
  ${props => (
        props.show &&
        css`
          flex-basis: 280px;
        `    
    )}
`;

export { LeftPanelWrap };