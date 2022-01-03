import React, { useEffect, useMemo } from "react";
import { Container } from "./styles";
import Item from "./Item";
import { connect } from "react-redux";
import { States, DataGridDataType, ConfirmModal } from "@reducers/index";
import { LoadDataGridRequest } from "@actions/dispachs/DataGridEvents";
import { EditClient, DeleteClient } from "@actions/dispachs/FormRegisterEvents";
import Button from "@components/ui/Button";
import Skeleton from "./Skeleton";
import { Box, Grid } from "@material-ui/core";
import { SendOpenFormMedicalHistoryRequest } from "@actions/dispachs/setOpenFormHistoryMedical";
import { SetConfirmModal } from "@actions/dispachs/ConfirmModal";

interface Props {
  clients: DataGridDataType[];
  loading: boolean;
  size: number;
}
interface Dispatch {
  loadDataGrid: () => void;
  editClient: (client: DataGridDataType) => void;
  openFormMedicalHistory: (id: number) => void;
  deleteClient: (id: number) => void;
  setConfirmModal: (value: ConfirmModal) => void;
}

const mapStateToProps = (props: States): Props => ({
  clients: props.DataGridData,
  loading: props.DataGridLoading,
  size: props.DataGridSize,
});
const mapDispatchToProps = (dispatch: any): Dispatch => ({
  loadDataGrid: () => dispatch(LoadDataGridRequest()),
  editClient: (client) => dispatch(EditClient(client)),
  openFormMedicalHistory: (id: number) =>
    dispatch(SendOpenFormMedicalHistoryRequest(id)),
  deleteClient: (id) => dispatch(DeleteClient(id)),
  setConfirmModal: (value) => dispatch(SetConfirmModal(value)),
});

const DataGrid: React.FC<Props & Dispatch> = (props) => {
  useEffect(props.loadDataGrid, []);

  const grid = useMemo(
    () =>
      props.clients.map((client, index) => (
        <Item
          key={index}
          handleDelete={() =>
            props.setConfirmModal({
              text: "Deseja realmente deletar cliente ?",
              yesButtonText: "confirmar",
              noButtonText: "cancelar",
              callback: () => props.deleteClient(client.id),
            })
          }
          handleEdit={() => props.editClient(client)}
          openFormMedicalHistory={() => props.openFormMedicalHistory(client.id)}
          {...client}
        />
      )),
    [props.clients]
  );
  return (
    <Container>
      {props.loading ? (
        <Skeleton />
      ) : (
        <>
          {grid}
          <Box padding="12px">
            <Grid container justifyContent="center">
              <Button
                onClick={props.loadDataGrid}
                color="primary"
                variant="contained"
                disabled={props.clients.length >= props.size}
              >
                <Grid container alignItems="center" direction="column">
                  <Grid item>carregar mais</Grid>
                  <Grid item>{`${props.clients.length}/${props.size}`}</Grid>
                </Grid>
              </Button>
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);
