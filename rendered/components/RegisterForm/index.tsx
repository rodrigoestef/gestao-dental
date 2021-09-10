import { Box, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import RadioGroup from "@components/ui/RadioGroup";
import { useFormik } from "formik";
import { CustonTextField } from "./styles";
import { connect } from "react-redux";
import { States, FormRegisterType } from "@reducers/index";
import * as Yup from "yup";
import Button from "@components/ui/Button";
import {
  SubmitFormRegister,
  SearchCep,
} from "@actions/dispachs/FormRegisterEvents";
import { cepMask, cpfMask, rgMask, telephoneMask } from "@factorys/masks";

type StateToProps = {
  formRegister: FormRegisterType;
  editMode: boolean;
};

type DispatchToProps = {
  submit: (e: FormRegisterType) => any;
  searchCep: (cep: string, form: FormRegisterType) => any;
};

const mapStateToProps = (states: States) => ({
  formRegister: states.formRegister,
  editMode: states.formRegisterEditMode,
});
const dispatchStateTProps = (dispatch: any) => ({
  submit: (e: FormRegisterType) => dispatch(SubmitFormRegister(e)),
  searchCep: (cep: string, form: FormRegisterType) =>
    dispatch(SearchCep(cep, form)),
});

const RegisterForm: React.FC<StateToProps & DispatchToProps> = (props) => {
  const formik = useFormik({
    initialValues: props.formRegister,
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      nome: Yup.string().required("Campo obrigatório"),
      rg: Yup.string().required("Campo obrigatório").min(12, "Valor inválido"),
      rgorgao: Yup.string().required("Campo obrigatório"),
      cpf: Yup.string().required("Campo obrigatório").min(14, "Valor inválido"),
      nascimento: Yup.string().required("Campo obrigatório"),
      genero: Yup.string().required("Campo obrigatório"),
      profissao: Yup.string().required("Campo obrigatório"),
      cep: Yup.string().required("Campo obrigatório"),
      endereco: Yup.string().required("Campo obrigatório"),
      bairro: Yup.string().required("Campo obrigatório"),
      cidade: Yup.string().required("Campo obrigatório"),
      telefone: Yup.string()
        .required("Campo obrigatório")
        .min(13, "Valor inválido"),
      celular: Yup.string().min(13, "Valor inválido"),
    }),
    onSubmit: props.submit,
  });
  useEffect(() => {
    if (
      formik.values.cep.length === 9 &&
      !(formik.values.cep === props.formRegister.cep)
    ) {
      props.searchCep(formik.values.cep.replace(/\D/g, ""), formik.values);
    }
  }, [formik.values.cep]);
  return (
    <Box padding={6}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <CustonTextField
              error={!!formik.errors.nome}
              helperText={formik.errors.nome}
              value={formik.values.nome}
              onChange={formik.handleChange}
              name="nome"
              label="Nome*"
            />
          </Grid>
          <Grid item xs={6}>
            <CustonTextField
              error={!!formik.errors.responsavel}
              helperText={formik.errors.responsavel}
              value={formik.values.responsavel}
              onChange={formik.handleChange}
              name="responsavel"
              label="Responsavel"
            />
          </Grid>
          <Grid item xs={6}>
            <RadioGroup
              error={!!formik.errors.genero}
              helperText={formik.errors.genero}
              value={formik.values.genero}
              onChange={formik.handleChange}
              tooltip="Gênero*"
              name="genero"
              group={[
                { label: "Masculino", value: "M" },
                { label: "Feminino", value: "F" },
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <CustonTextField
              error={!!formik.errors.rg}
              helperText={formik.errors.rg}
              value={formik.values.rg}
              onChange={(event: React.ChangeEvent<any>) => {
                event.target.value = rgMask(event.target.value);
                formik.handleChange(event);
              }}
              name="rg"
              label="RG*"
            />
          </Grid>
          <Grid item xs={3}>
            <CustonTextField
              error={!!formik.errors.rgorgao}
              helperText={formik.errors.rgorgao}
              value={formik.values.rgorgao}
              onChange={formik.handleChange}
              name="rgorgao"
              label="Orgão Expedidor*"
            />
          </Grid>
          <Grid item xs={3}>
            <CustonTextField
              error={!!formik.errors.cpf}
              helperText={formik.errors.cpf}
              value={formik.values.cpf}
              onChange={(event: React.ChangeEvent<any>) => {
                event.target.value = cpfMask(event.target.value);
                formik.handleChange(event);
              }}
              name="cpf"
              label="CPF*"
            />
          </Grid>

          <Grid item xs={3}>
            <CustonTextField
              type="date"
              InputLabelProps={{ shrink: true }}
              error={!!formik.errors.nascimento}
              helperText={formik.errors.nascimento}
              value={formik.values.nascimento}
              onChange={formik.handleChange}
              name="nascimento"
              label="Data de nascimento*"
            />
          </Grid>

          <Grid item xs={12}>
            <CustonTextField
              error={!!formik.errors.profissao}
              helperText={formik.errors.profissao}
              value={formik.values.profissao}
              onChange={formik.handleChange}
              name="profissao"
              label="Profissão*"
            />
          </Grid>
          <Grid item xs={4}>
            <CustonTextField
              error={!!formik.errors.cep}
              helperText={formik.errors.cep}
              value={formik.values.cep}
              onChange={(event: React.ChangeEvent<any>) => {
                event.target.value = cepMask(event.target.value);
                formik.handleChange(event);
              }}
              name="cep"
              label="CEP*"
            />
          </Grid>
          <Grid item xs={8}>
            <CustonTextField
              error={!!formik.errors.endereco}
              helperText={formik.errors.endereco}
              value={formik.values.endereco}
              onChange={formik.handleChange}
              name="endereco"
              label="Endereço*"
            />
          </Grid>
          <Grid item xs={6}>
            <CustonTextField
              error={!!formik.errors.bairro}
              helperText={formik.errors.bairro}
              value={formik.values.bairro}
              onChange={formik.handleChange}
              name="bairro"
              label="Bairro*"
            />
          </Grid>
          <Grid item xs={6}>
            <CustonTextField
              error={!!formik.errors.cidade}
              helperText={formik.errors.cidade}
              value={formik.values.cidade}
              onChange={formik.handleChange}
              name="cidade"
              label="Cidade*"
            />
          </Grid>
          <Grid item xs={6}>
            <CustonTextField
              error={!!formik.errors.telefone}
              helperText={formik.errors.telefone}
              value={formik.values.telefone}
              onChange={(event: React.ChangeEvent<any>) => {
                event.target.value = telephoneMask(event.target.value);
                formik.handleChange(event);
              }}
              name="telefone"
              label="Telefone*"
            />
          </Grid>
          <Grid item xs={6}>
            <CustonTextField
              error={!!formik.errors.celular}
              helperText={formik.errors.celular}
              value={formik.values.celular}
              onChange={(event: React.ChangeEvent<any>) => {
                event.target.value = telephoneMask(event.target.value);
                formik.handleChange(event);
              }}
              name="celular"
              label="Celular"
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
              {props.editMode ? "Editar" : "Cadastrar"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default connect(mapStateToProps, dispatchStateTProps)(RegisterForm);
