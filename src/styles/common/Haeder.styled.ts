
import styled, { css } from "styled-components";
import { Menu } from "styled-icons/boxicons-regular/Menu";

const HeaderWrap = styled.section`
  position: fixed;
  top:0; left:0; right:0;
  z-index: 1000;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  border-bottom: 1px solid #ddd;
  background: white;
  
  height: 4.5rem;
  box-sizing: border-box;
  padding: .5rem;
`;

const LeftWrap = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 280px;
`;


const MenuBtn = styled(Menu)<{show?: boolean}>`
  color: #bcbcbc;
  cursor: pointer;
  transition: color .3s, background .3s;
  border-radius: 50%;
  background: initial;
  padding: .5rem;
  
  &:hover {
    color: #2a2a2a;
    background: #eaeaea; 
  }
  
  ${props => (
    props.show &&
    css`
      color: #2a2a2a;
    `    
  )}
`;

const MenuName = styled.h1`
  color: #888;
  font-size: 1.3rem;
  margin-left: .5rem;
`;


export { HeaderWrap, LeftWrap, MenuBtn, MenuName };