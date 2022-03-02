import React from "react";
import { Container, GobackButton, LeftArrow, ExportIcon } from "./styles";
import { connect } from "react-redux";
import { States } from "@reducers/index";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { SendCloseFormMedicalHistoryRequest } from "@actions/dispachs/setOpenFormHistoryMedical";
import { ExportMedicalHistory } from "@actions/dispachs/FormMedicalHistoryEvents";

interface Props {
  openFormEffect: boolean;
  formMedicalHistoryEditId: number;
}
interface DispachProps {
  SendCloseRequest: () => void;
  ExportMedicalHistory: (e: number) => void;
}

const mapStateToProps = (props: States): Props => ({
  openFormEffect: props.openFormMedicalHistoryEffect,
  formMedicalHistoryEditId: props.formMedicalHistoryEditId,
});
const mapDispachToProps = (dispach: any): DispachProps => ({
  SendCloseRequest: () => dispach(SendCloseFormMedicalHistoryRequest()),
  ExportMedicalHistory: (e) => dispach(ExportMedicalHistory(e)),
});

const FlootingLeftContainer: React.FC<Props & DispachProps> = ({
  openFormEffect,
  SendCloseRequest,
  children,
  formMedicalHistoryEditId,
  ExportMedicalHistory,
}) => {
  return (
    <Container open={openFormEffect}>
      <Grid container alignItems="center" justifyContent="space-between">
        <GobackButton onClick={SendCloseRequest}>
          <LeftArrow />
          <span>Voltar</span>
        </GobackButton>
        {formMedicalHistoryEditId > 0 && (
          <Tooltip title="Exportar" arrow placement="left">
            <IconButton
              onClick={() => ExportMedicalHistory(formMedicalHistoryEditId)}
            >
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
)(FlootingLeftContainer);
