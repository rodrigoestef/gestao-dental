import React from "react";
import { States, formMedicalHistoryType } from "@reducers/index";
import { connect } from "react-redux";
import { Box, Grid } from "@material-ui/core";
import { CustonTextField } from "@components/RegisterForm/styles";
import { useFormik } from "formik";
import { SubmitMedicalHistoryForm } from "@actions/dispachs/FormMedicalHistoryEvents";
import * as Yup from "yup";
import Button from "@components/ui/Button";
type StateToProps = {
  formMedicalHistory: formMedicalHistoryType;
};
type DispatchToProps = {
  submit: (e: formMedicalHistoryType) => void;
};

const mapStateToProps = (states: States): StateToProps => ({
  formMedicalHistory: states.formMedicalHistory,
  //   loading: states.formMedicalHistorySkeleton,
});
const mapDispatchToProps = (dispath: any): DispatchToProps => ({
  submit: (e) => dispath(SubmitMedicalHistoryForm(e)),
});

const FormMedicalHistory: React.FC<StateToProps & DispatchToProps> = (
  props
) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.formMedicalHistory,
    validationSchema: Yup.object().shape({
      teste: Yup.string().required("Campo obrigatório"),
    }),
    onSubmit: props.submit,
  });

  return (
    <Box padding={6}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <CustonTextField
              label="teste"
              name="teste"
              error={!!formik.errors.teste}
              helperText={formik.errors.teste}
              onChange={formik.handleChange}
              value={formik.values.teste}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disableRipple
              color="primary"
            >
              {props.formMedicalHistory.id > 0 ? "editar" : "criar"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FormMedicalHistory);
