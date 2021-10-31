import { Modal } from "@material-ui/core";
import styled from "styled-components";

export const CustonModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    outline: none;
  }
`;
