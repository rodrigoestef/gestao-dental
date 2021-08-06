import { ReactComponent as searchSvg } from "@assets/icons/search.svg";
import { ReactComponent as arrowSpinnerSvg } from "@assets/icons/arrowSpinner.svg";
import { ReactComponent as addSvg } from "@assets/icons/add.svg";
import { withStyles, IconButton } from "@material-ui/core";
import styled from "styled-components";

export const IconButtonBordered = withStyles({
  root: {
    backgroundColor: "var(--primary-color)",
    transition: "0.9s",
    "&:hover": {
      backgroundColor: "var(--hover-primary-color)",
    },
  },
})(IconButton);

export const SearchIcon = styled(searchSvg)`
  fill: var(--primary-color);
  /* fill: #f00; */
  height: 30px;
  width: 30px;
`;
export const AddIcon = styled(addSvg)`
  fill: #fff;
  height: 30px;
  width: 30px;
`;
export const ArrowSpinnerIcon = styled(arrowSpinnerSvg)`
  fill: var(--primary-color);
  height: 30px;
  width: 30px;
  animation: spinner 0.5s linear infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
