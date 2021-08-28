import { Box, Grid } from "@material-ui/core";
import React from "react";
import RadioGroup from "@components/ui/RadioGroup";
import { useFormik } from "formik";
import { CustonTextField } from "./styles";
import * as Yup from "yup";
import Button from "@components/ui/Button";
const RegisterForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      responsavel: "",
      rg: "",
      rgorgao: "",
      cpf: "",
      nascimento: "",
      genero: "",
      profissao: "",
      cep: "",
      endereco: "",
      bairro: "",
      cidade: "",
      telefone: "",
      celular: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      nome: Yup.string().required("Campo obrigatório"),
      rg: Yup.string().required("Campo obrigatório"),
      rgorgao: Yup.string().required("Campo obrigatório"),
      cpf: Yup.string().required("Campo obrigatório"),
      nascimento: Yup.string().required("Campo obrigatório"),
      genero: Yup.string().required("Campo obrigatório"),
      profissao: Yup.string().required("Campo obrigatório"),
      cep: Yup.string().required("Campo obrigatório"),
      endereco: Yup.string().required("Campo obrigatório"),
      bairro: Yup.string().required("Campo obrigatório"),
      cidade: Yup.string().required("Campo obrigatório"),
      telefone: Yup.string().required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
              name="cpf"
              label="CPF*"
            />
          </Grid>

          <Grid item xs={3}>
            <CustonTextField
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
              name="telefone"
              label="Telefone*"
            />
          </Grid>
          <Grid item xs={6}>
            <CustonTextField
              error={!!formik.errors.celular}
              helperText={formik.errors.celular}
              value={formik.values.celular}
              onChange={formik.handleChange}
              name="celular"
              label="Celular"
            />
          </Grid>
          <Grid item xs={2}>
            {/* <Box width="100%" margin="24px"> */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disableRipple
              color="primary"
            >
              Cadastrar
            </Button>
            {/* </Box> */}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RegisterForm;
