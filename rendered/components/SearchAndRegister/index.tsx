import Card from "@components/ui/Card";
import React, { useState } from "react";
import { TextField, Grid, Box, IconButton, Tooltip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import {
  SearchIcon,
  ArrowSpinnerIcon,
  AddIcon,
  IconButtonBordered,
} from "./styles";
import { connect } from "react-redux";
import setOpenFormRegister from "@actions/dispachs/setOpenFormRegister";

interface Dispach {
  openForm: () => void;
}

const mapDispachToState = (dispach: any): Dispach => ({
  openForm: () => dispach(setOpenFormRegister(true)),
});

const SerachAndRegister: React.FC<Dispach> = (props) => {
  const [searchText, setSearchText] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <Card>
        <Grid
          container
          wrap="nowrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item sm={10}>
            <form>
              <Autocomplete
                fullWidth={true}
                options={["ss"]}
                freeSolo
                onChange={(_, value) => {
                  setSearchText(value || "");
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Pesquisar paciente"
                    fullWidth={true}
                    variant="outlined"
                    InputProps={{
                      endAdornment: !loading ? (
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
      <datalist id="teste">
        <option value="teste" />
      </datalist>
    </>
  );
};

export default connect(null, mapDispachToState)(SerachAndRegister);
