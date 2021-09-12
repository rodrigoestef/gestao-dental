import { Button, withStyles } from "@material-ui/core";

export default withStyles({
  root: {
    textTransform: "none",
  },
  containedPrimary: {
    backgroundColor: "var(--primary-color)",
    "&:hover": {
      backgroundColor: "var(--hover-primary-color)",
    },
  },
  outlinedPrimary: {
    color: "var(--primary-color)",
    borderColor: "var(--primary-color)",
    "&:hover": {
      color: "var(--hover-primary-color)",
      borderColor: "var(--hover-primary-color)",
    },
  },
  textPrimary: {
    color: "var(--primary-color)",
    "&:hover": {
      color: "var(--hover-primary-color)",
    },
  },
})(Button);
