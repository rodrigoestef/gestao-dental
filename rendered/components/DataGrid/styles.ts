import styled from "styled-components";
import { ReactComponent as editSvg } from "@assets/icons/edit.svg";
import { Skeleton } from "@material-ui/lab";

export const CustonSkeleton = styled(Skeleton).attrs({ variant: "text" })`
  margin-bottom: 10px;
  height: 30px;
`;

type GridItemType = {
  open?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 0px;
`;

export const GridItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.28);
  display: flex;
  flex-direction: column;
`;
export const ItemsContainer = styled.div<GridItemType>`
  width: 100%;
  height: ${(props) => (props.open ? "200px" : "100px")};
  overflow: hidden;
  padding: 12px;
  transition: 300ms linear;
`;
export const Text = styled.div`
  margin-bottom: 10px;
`;

export const EditIcon = styled(editSvg)`
  fill: var(--primary-color);
  height: 15px;
  width: 15px;
  transition: 0.1s;
  &:hover {
    fill: var(--hover-primary-color);
  }
`;
