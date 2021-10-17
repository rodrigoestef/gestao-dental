import Card from "@components/ui/Card";
import React, { useState } from "react";
import { TextField, Grid, IconButton, Tooltip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import {
  SearchIcon,
  ArrowSpinnerIcon,
  AddIcon,
  IconButtonBordered,
} from "./styles";
import { connect } from "react-redux";
import { SendOpenRequest } from "@actions/dispachs/setOpenFormRegister";
import {
  SetSearchName,
  SubmitSearchClientForm,
} from "@actions/dispachs/DataGridEvents";
import { States } from "@reducers/index";

interface Dispach {
  openForm: () => void;
  setSearchName: (value: string) => void;
  submitSearchClientForm: () => void;
}
interface Props {
  loading: boolean;
  searchTextOptions: string[];
}
const mapStateToProps = (props: States): Props => ({
  loading: props.DataGridLoading,
  searchTextOptions: props.searchClientAutoComplete,
});

const mapDispachToProps = (dispach: any): Dispach => ({
  openForm: () => dispach(SendOpenRequest()),
  setSearchName: (value) => dispach(SetSearchName(value)),
  submitSearchClientForm: () => dispach(SubmitSearchClientForm()),
});

const SerachAndRegister: React.FC<Dispach & Props> = (props) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.submitSearchClientForm();
  };
  return (
    <Card>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item sm={10}>
          <form onSubmit={handleSubmit}>
            <Autocomplete
              fullWidth={true}
              options={props.searchTextOptions}
              disableClearable
              forcePopupIcon={false}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Pesquisar paciente"
                  fullWidth={true}
                  size="small"
                  variant="outlined"
                  onChange={(event) => props.setSearchName(event.target.value)}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: !props.loading ? (
                      <IconButton type="submit">
                        <SearchIcon />
                      </IconButton>
                    ) : (
                      <IconButton disabled>
                        <ArrowSpinnerIcon />
                      </IconButton>
                    ),
                  }}
                />
              )}
            />
          </form>
        </Grid>
        <Grid item>
          <Tooltip arrow title="adicionar paciente">
            <IconButtonBordered onClick={props.openForm}>
              <AddIcon />
            </IconButtonBordered>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispachToProps)(SerachAndRegister);
