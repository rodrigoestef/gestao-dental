import React from "react";
import { Container, GobackButton, LeftArrow } from "./styles";
import { connect } from "react-redux";
import { States } from "@reducers/index";
import { Grid } from "@material-ui/core";
import { SendCloseFormMedicalHistoryRequest } from "@actions/dispachs/setOpenFormHistoryMedical";

interface Props {
  openFormEffect: boolean;
}
interface DispachProps {
  SendCloseRequest: () => void;
}

const mapStateToProps = (props: States): Props => ({
  openFormEffect: props.openFormMedicalHistoryEffect,
});
const mapDispachToProps = (dispach: any): DispachProps => ({
  SendCloseRequest: () => dispach(SendCloseFormMedicalHistoryRequest()),
});

const FlootingLeftContainer: React.FC<Props & DispachProps> = ({
  openFormEffect,
  SendCloseRequest,
  children,
}) => {
  return (
    <Container open={openFormEffect}>
      <Grid container>
        <GobackButton onClick={SendCloseRequest}>
          <LeftArrow />
          <span>Voltar</span>
        </GobackButton>
      </Grid>
      {children}
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FlootingLeftContainer);
