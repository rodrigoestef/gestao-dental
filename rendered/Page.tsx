import React from "react";
import { Grid, Box } from "@material-ui/core";
import Card from "@components/ui/Card";
import SearchAndRegister from "@components/SearchAndRegister";
import RegisterForm from "@components/RegisterForm";
import { States } from "@reducers/index";
import { connect } from "react-redux";

interface Props {
  openFormRegister?: boolean;
}

const mapStateToProps = (props: States): Props => ({
  openFormRegister: props.openFormRegister,
});

const Page: React.FC<Props> = (props) => {
  return (
    <>
      {props.openFormRegister && <RegisterForm />}
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
