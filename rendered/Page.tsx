import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import Card from "@components/ui/Card";
import SearchAndRegister from "@components/SearchAndRegister";
import FlootingRightContainer from "@components/ui/FlootingRightContainer";
import { States, Notify } from "@reducers/index";
import { connect } from "react-redux";
import RegisterForm from "@components/RegisterForm";
import { useSnackbar } from "notistack";
interface Props {
  openFormRegister?: boolean;
  notify?: Notify;
}

const mapStateToProps = (props: States): Props => ({
  openFormRegister: props.openFormRegister,
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
        <Box height="100%" padding="16px" bgcolor="var(--bg-color)">
          <Card>grid</Card>
        </Box>
      </Grid>
    </>
  );
};

export default connect(mapStateToProps, null)(Page);
