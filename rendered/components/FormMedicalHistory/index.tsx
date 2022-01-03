import React from "react";
import { States, formMedicalHistoryType } from "@reducers/index";
import { connect } from "react-redux";
import { Box, Grid } from "@material-ui/core";
import { CustonTextField } from "@components/RegisterForm/styles";
import { useFormik } from "formik";
type StateToProps = {
  formMedicalHistory: formMedicalHistoryType;
};

const mapStateToProps = (states: States): StateToProps => ({
  formMedicalHistory: states.formMedicalHistory,
  //   loading: states.formMedicalHistorySkeleton,
});

const FormMedicalHistory: React.FC<StateToProps> = (props) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.formMedicalHistory,
    onSubmit: () => {
      console.log("a");
    },
  });

  return (
    <Box padding={6}>
      <form>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <CustonTextField label="teste" value={formik.values.teste} />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default connect(mapStateToProps, () => undefined)(FormMedicalHistory);
