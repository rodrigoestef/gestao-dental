import React from "react";
import { Container, GobackButton, RightArrow, ExportIcon } from "./styles";
import { connect } from "react-redux";
import { States } from "@reducers/index";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { SendCloseRequest } from "@actions/dispachs/setOpenFormRegister";
import { ExportClient } from "@actions/dispachs/FormRegisterEvents";

interface Props {
  openFormEffect: boolean;
  editClientId: number;
}
interface DispachProps {
  SendCloseRequest: () => void;
  ExportClient: (id: number) => void;
}

const mapStateToProps = (props: States): Props => ({
  openFormEffect: props.openFormEffect,
  editClientId: props.formRegisterClientEditId,
});
const mapDispachToProps = (dispach: any): DispachProps => ({
  SendCloseRequest: () => dispach(SendCloseRequest()),
  ExportClient: (id) => dispach(ExportClient(id)),
});

const FlootingRightContainer: React.FC<Props & DispachProps> = ({
  openFormEffect,
  SendCloseRequest,
  children,
  editClientId,
  ExportClient,
}) => {
  return (
    <Container open={openFormEffect}>
      <Grid container alignItems="center" justifyContent="space-between">
        <GobackButton onClick={SendCloseRequest}>
          <span>Voltar</span>
          <RightArrow />
        </GobackButton>
        {editClientId > 0 && (
          <Tooltip title="Exportar" arrow placement="left">
            <IconButton onClick={() => ExportClient(editClientId)}>
              <ExportIcon />
            </IconButton>
          </Tooltip>
        )}
      </Grid>
      {children}
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FlootingRightContainer);
