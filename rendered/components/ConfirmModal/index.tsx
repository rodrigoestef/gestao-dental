import React from "react";
import { Grid, Box } from "@material-ui/core";
import { CustonModal } from "./styled";
import Button from "@components/ui/Button";
import { connect } from "react-redux";
import { States, ConfirmModal } from "@reducers/index";
import { SetConfirmModal } from "@actions/dispachs/ConfirmModal";

interface Props {
  confirmModal: ConfirmModal | null;
}
interface Dispatch {
  clearConfirmModal: () => void;
}

const mapStateToProps = (states: States): Props => ({
  confirmModal: states.confirmModal,
});

const mapDispatchToProps = (dispatch: any): Dispatch => ({
  clearConfirmModal: () => dispatch(SetConfirmModal(null)),
});

const ConfirmModalComp: React.FC<Props & Dispatch> = (props) => {
  return (
    <CustonModal open={!!props.confirmModal}>
      <Box borderRadius="0.5em" padding="20px" bgcolor="#fff">
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12}>
            <Box textAlign="center">{props.confirmModal?.text}</Box>
          </Grid>
          <Grid item>
            <Button
              onClick={props.clearConfirmModal}
              variant="outlined"
              color="primary"
            >
              {props.confirmModal?.noButtonText || "não"}
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={() => {
                props.confirmModal?.callback();
                props.clearConfirmModal();
              }}
              variant="contained"
              color="primary"
            >
              {props.confirmModal?.yesButtonText || "sim"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </CustonModal>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModalComp);
