import React from "react";
import { States, formMedicalHistoryType } from "@reducers/index";
import { connect } from "react-redux";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup as RadioGroupDefault,
} from "@material-ui/core";
import { CustonTextField } from "@components/RegisterForm/styles";
import RadioGroup from "@components/ui/RadioGroup";
import CustonTextFieldEnabled from "@components/ui/CustonTextFieldEnabled";
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
    validateOnChange: false,
    initialValues: props.formMedicalHistory,
    validationSchema: Yup.object().shape({
      hasScarringProblem: Yup.string().required("Campo obrigatório"),
      hasBleedingProblem: Yup.string().required("Campo obrigatório"),
      halitosis: Yup.string().required("Campo obrigatório"),
      hygiene: Yup.string().required("Campo obrigatório"),
      hygieneFrequency: Yup.string().required("Campo obrigatório"),
      gums: Yup.string().required("Campo obrigatório"),
    }),
    onSubmit: props.submit,
  });

  return (
    <Box padding={6}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Sofre de alguma doença? Qual?"
              name="disease"
              error={!!formik.errors.disease}
              helperText={formik.errors.disease}
              onChange={formik.handleChange}
              value={formik.values.disease}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Está em tratamento médico? Qual? Onde?"
              name="hasMedicalTreatment"
              error={!!formik.errors.hasMedicalTreatment}
              helperText={formik.errors.hasMedicalTreatment}
              onChange={formik.handleChange}
              value={formik.values.hasMedicalTreatment}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Faz uso de algum medicamento ou produto? Qual? Dosagem?"
              name="useMedicine"
              error={!!formik.errors.useMedicine}
              helperText={formik.errors.useMedicine}
              onChange={formik.handleChange}
              value={formik.values.useMedicine}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="É alergico a algum medicamento ou produto? Qual?"
              name="hasAllergy"
              error={!!formik.errors.hasAllergy}
              helperText={formik.errors.hasAllergy}
              onChange={formik.handleChange}
              value={formik.values.hasAllergy}
            />
          </Grid>
          <Grid item xs={12}>
            <span>Tem ou teve alguma dessas doenças?</span>
          </Grid>
          <Grid container item xs={12}>
            <FormGroup>
              <FormControlLabel
                label="Hipertensão"
                control={
                  <Checkbox
                    name="hasHypertension"
                    checked={formik.values.hasHypertension}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Diabete"
                control={
                  <Checkbox
                    name="hasDiabetes"
                    checked={formik.values.hasDiabetes}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Ulcera"
                control={
                  <Checkbox
                    name="hasUlcer"
                    checked={formik.values.hasUlcer}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Sifilis"
                control={
                  <Checkbox
                    name="hasSyphilis"
                    checked={formik.values.hasSyphilis}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                label="Herpes"
                control={
                  <Checkbox
                    name="hasHerpes"
                    checked={formik.values.hasHerpes}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Tuberculose"
                control={
                  <Checkbox
                    name="hasTuberculosis"
                    checked={formik.values.hasTuberculosis}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Doença cardiaca"
                control={
                  <Checkbox
                    name="hasHeartDisease"
                    checked={formik.values.hasHeartDisease}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Gonorréia"
                control={
                  <Checkbox
                    name="hasGonorrhea"
                    checked={formik.values.hasGonorrhea}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                label="Problemas renais"
                control={
                  <Checkbox
                    name="hasKidneyProblems"
                    checked={formik.values.hasKidneyProblems}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Hepatite B ou C"
                control={
                  <Checkbox
                    name="hasHepatopathyBorC"
                    checked={formik.values.hasHepatopathyBorC}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label="Doenças hematológicas"
                control={
                  <Checkbox
                    name="hasHematologicalDiseases"
                    checked={formik.values.hasHematologicalDiseases}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Outras?"
              name="hasAnotherDisease"
              error={!!formik.errors.hasAnotherDisease}
              helperText={formik.errors.hasAnotherDisease}
              onChange={formik.handleChange}
              value={formik.values.hasAnotherDisease}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Submeteu-se a alguma cirurgia nos últimos 5 anos?"
              name="hasSurgery"
              error={!!formik.errors.hasSurgery}
              helperText={formik.errors.hasSurgery}
              onChange={formik.handleChange}
              value={formik.values.hasSurgery}
            />
          </Grid>
          <Grid item xs={6}>
            <span>Tem problema de cicatrização</span>
            <RadioGroup
              error={!!formik.errors.hasScarringProblem}
              helperText={formik.errors.hasScarringProblem}
              value={formik.values.hasScarringProblem}
              onChange={formik.handleChange}
              tooltip="Tem problema de cicatrização"
              name="hasScarringProblem"
              group={[
                { label: "sim", value: "T" },
                { label: "não", value: "F" },
              ]}
            />
          </Grid>
          <Grid item xs={6}>
            <span>Tem problema de hemorragia</span>
            <RadioGroup
              error={!!formik.errors.hasBleedingProblem}
              helperText={formik.errors.hasBleedingProblem}
              value={formik.values.hasBleedingProblem}
              onChange={formik.handleChange}
              tooltip="Tem problema de hemorragia"
              name="hasBleedingProblem"
              group={[
                { label: "sim", value: "T" },
                { label: "não", value: "F" },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Submeteu-se a transfusão de sangue nos últimos anos? Motivo?"
              name="bloodTransfusion"
              error={!!formik.errors.bloodTransfusion}
              helperText={formik.errors.bloodTransfusion}
              onChange={formik.handleChange}
              value={formik.values.bloodTransfusion}
            />
          </Grid>
          <Grid item xs={12}>
            <h4>Para mulheres:</h4>
          </Grid>
          <Grid item xs={6}>
            <span>Está gravida?</span>
            <RadioGroup
              error={!!formik.errors.isPregnant}
              helperText={formik.errors.isPregnant}
              value={formik.values.isPregnant}
              onChange={formik.handleChange}
              tooltip="Está gravida?"
              name="isPregnant"
              group={[
                { label: "sim", value: "T" },
                { label: "não", value: "F" },
              ]}
            />
          </Grid>
          <Grid item xs={6}>
            <span>Está amamentando?</span>
            <RadioGroup
              error={!!formik.errors.isBreastfeeding}
              helperText={formik.errors.isBreastfeeding}
              value={formik.values.isBreastfeeding}
              onChange={formik.handleChange}
              tooltip="Está amamentando?"
              name="isBreastfeeding"
              group={[
                { label: "sim", value: "T" },
                { label: "não", value: "F" },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Algum problema de mentruação? qual?"
              name="menstruationProblem"
              error={!!formik.errors.menstruationProblem}
              helperText={formik.errors.menstruationProblem}
              onChange={formik.handleChange}
              value={formik.values.menstruationProblem}
            />
          </Grid>
          <Grid item xs={12}>
            <h4>Exame das estruturas bucais</h4>
          </Grid>
          <Grid item xs={4}>
            <FormControl error={!!formik.errors.halitosis}>
              <FormLabel>Halitose</FormLabel>
              <RadioGroupDefault
                name="halitosis"
                onChange={formik.handleChange}
                value={formik.values.halitosis}
              >
                <FormControlLabel
                  label="Ausente"
                  value="Ausente"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Moderada"
                  value="Moderada"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Forte"
                  value="Forte"
                  control={<Radio color="primary" />}
                />
              </RadioGroupDefault>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl error={!!formik.errors.hygiene}>
              <FormLabel>Higiene</FormLabel>
              <RadioGroupDefault
                name="hygiene"
                onChange={formik.handleChange}
                value={formik.values.hygiene}
              >
                <FormControlLabel
                  label="Ausente"
                  value="Ausente"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Regular"
                  value="Regular"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Deficiente"
                  value="Deficiente"
                  control={<Radio color="primary" />}
                />
              </RadioGroupDefault>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl error={!!formik.errors.hygieneFrequency}>
              <FormLabel>Frequencia da higiene</FormLabel>
              <RadioGroupDefault
                name="hygieneFrequency"
                onChange={formik.handleChange}
                value={formik.values.hygieneFrequency}
              >
                <FormControlLabel
                  label="1 vez ao dia"
                  value="1 vez ao dia"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="2 vezes ao dia"
                  value="2 vezes ao dia"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="3 vezes ao dia"
                  value="3 vezes ao dia"
                  control={<Radio color="primary" />}
                />
              </RadioGroupDefault>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="O.B.S."
              name="obs"
              error={!!formik.errors.obs}
              helperText={formik.errors.obs}
              onChange={formik.handleChange}
              value={formik.values.obs}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextFieldEnabled
              label="Presença de lesão branca? Localização?"
              name="whiteLesion"
              error={!!formik.errors.whiteLesion}
              helperText={formik.errors.whiteLesion}
              onChange={formik.handleChange}
              value={formik.values.whiteLesion}
            />
          </Grid>
          <Grid item xs={12}>
            <span>Gengivas</span>
            <RadioGroup
              error={!!formik.errors.gums}
              helperText={formik.errors.gums}
              value={formik.values.gums}
              onChange={formik.handleChange}
              tooltip="Gengivas"
              name="gums"
              group={[
                { label: "Normal", value: "Normal" },
                { label: "Gengivite", value: "Gengivite" },
                { label: "Periodontite", value: "Periodontite" },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <CustonTextField
              label="Outros"
              name="others"
              error={!!formik.errors.others}
              helperText={formik.errors.others}
              onChange={formik.handleChange}
              value={formik.values.others}
            />
          </Grid>

          <Grid container item xs={6} spacing={3}>
            <p>PLACA:</p>
            <Grid item xs={12}>
              <CustonTextFieldEnabled
                label="Pouca: Elem. Dentário"
                name="littleBoard"
                error={!!formik.errors.littleBoard}
                helperText={formik.errors.littleBoard}
                onChange={formik.handleChange}
                value={formik.values.littleBoard}
              />
            </Grid>
            <Grid item xs={12}>
              <CustonTextFieldEnabled
                label="Muita: Elem. Dentário"
                name="lotOfPlaque"
                error={!!formik.errors.lotOfPlaque}
                helperText={formik.errors.lotOfPlaque}
                onChange={formik.handleChange}
                value={formik.values.lotOfPlaque}
              />
            </Grid>
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <p>CÁLCULO:</p>
            <Grid item xs={12}>
              <CustonTextFieldEnabled
                label="Pouco: Elem. Dentário"
                name="littleCalculus"
                error={!!formik.errors.littleCalculus}
                helperText={formik.errors.littleCalculus}
                onChange={formik.handleChange}
                value={formik.values.littleCalculus}
              />
            </Grid>
            <Grid item xs={12}>
              <CustonTextFieldEnabled
                label="Pouco: Elem. Dentário"
                name="lotOfCalculus"
                error={!!formik.errors.lotOfCalculus}
                helperText={formik.errors.lotOfCalculus}
                onChange={formik.handleChange}
                value={formik.values.lotOfCalculus}
              />
            </Grid>
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
