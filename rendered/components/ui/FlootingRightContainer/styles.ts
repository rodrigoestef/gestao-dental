import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "0%" : "100%")};
  z-index: 100;
  overflow: hidden;
  height: 100vh;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  transition: 0.3s linear;
  overflow: auto;
`;

export const RightArrow = styled.div`
  width: 15px;
  height: 15px;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  transform: rotate(-45deg);
`;
export const GobackButton = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
