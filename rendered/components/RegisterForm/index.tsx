import React from "react";
import { Container, GobackButton, RightArrow } from "./styles";
import { connect } from "react-redux";
import { States } from "@reducers/index";
import { Grid } from "@material-ui/core";
import { SendCloseRequest } from "@actions/dispachs/setOpenFormRegister";

interface Props {
  openFormEffect: boolean;
}
interface DispachProps {
  SendCloseRequest: () => void;
}

const mapStateToProps = (props: States): Props => ({
  openFormEffect: props.openFormEffect,
});
const mapDispachToProps = (dispach: any): DispachProps => ({
  SendCloseRequest: () => dispach(SendCloseRequest()),
});

const RegisterForm: React.FC<Props & DispachProps> = ({
  openFormEffect,
  SendCloseRequest,
}) => {
  return (
    <Container open={openFormEffect}>
      <GobackButton onClick={SendCloseRequest}>
        <Grid container justifyContent="flex-end" alignItems="center">
          <span>Voltar</span>
          <RightArrow />
        </Grid>
      </GobackButton>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispachToProps)(RegisterForm);
