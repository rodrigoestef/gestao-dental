import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import Card from "@components/ui/Card";
import SearchAndRegister from "@components/SearchAndRegister";
import FlootingRightContainer from "@components/ui/FlootingRightContainer";
import FlootingLeftContainer from "@components/ui/FlootingLeftContainer";
import { States, Notify } from "@reducers/index";
import { connect } from "react-redux";
import RegisterForm from "@components/RegisterForm";
import { useSnackbar } from "notistack";
import DataGrid from "@components/DataGrid";
import ConfirmModal from "@components/ConfirmModal";
interface Props {
  openFormRegister?: boolean;
  openFormMedicalHistory?: boolean;
  notify?: Notify;
}

const mapStateToProps = (props: States): Props => ({
  openFormRegister: props.openFormRegister,
  openFormMedicalHistory: props.openFormMedicalHistory,
  notify: props.notify,
});

const Page: React.FC<Props> = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (props.notify) {
      enqueueSnackbar(props.notify.text, { variant: props.notify.variant });
    }
  }, [props.notify]);
  return (
    <>
      {props.openFormRegister && (
        <FlootingRightContainer>
          <RegisterForm />
        </FlootingRightContainer>
      )}
      {props.openFormMedicalHistory && (
        <>
          <FlootingLeftContainer>
            <h1>Histórico médico</h1>
          </FlootingLeftContainer>
        </>
      )}
      <Grid
        id="container"
        wrap="nowrap"
        container
        direction="column"
        spacing={4}
      >
        <Grid item>
          <SearchAndRegister />
        </Grid>
        <Box flexGrow="1" padding="16px" bgcolor="var(--bg-color)">
          <Card>
            <DataGrid />
          </Card>
        </Box>
      </Grid>
      <ConfirmModal />
    </>
  );
};

export default connect(mapStateToProps, null)(Page);
