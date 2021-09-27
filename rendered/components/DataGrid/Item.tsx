import { Grid, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { GridItem, ItemsContainer, Text, EditIcon } from "./styles";
import Button from "@components/ui/Button";
import { FormRegisterType } from "@reducers/index";
import { USAtoBRdate } from "@factorys/masks";

interface Types {
  handleEdit: () => void;
}

const Item: React.FC<FormRegisterType & Types> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <GridItem>
      <ItemsContainer open={open}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12}>
            <Text>
              <strong>Nome:</strong> <span>{props.nome}</span>
            </Text>
          </Grid>
          <Grid item container xs={6} spacing={4}>
            <Grid item>
              <Text>
                <strong>Nascimento:</strong>{" "}
                <span>{USAtoBRdate(props.nascimento)}</span>
              </Text>
            </Grid>
            <Grid item>
              <strong>Gênero:</strong> <span>{props.genero}</span>
            </Grid>
          </Grid>
          <Grid item container justifyContent="flex-end" xs={6}>
            <Grid item>
              <IconButton onClick={props.handleEdit}>
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={4}>
            <Grid item>
              <Text>
                <strong>Telefone:</strong> <span>{props.telefone}</span>
              </Text>
            </Grid>
            <Grid item>
              <Text>
                <strong>Celular:</strong> <span>{props.celular}</span>
              </Text>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={4}>
            <Grid item>
              <Text>
                <strong>Endereço:</strong> <span>{props.endereco}</span>
              </Text>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={4}>
            <Grid item>
              <Text>
                <strong>Bairro:</strong> <span>{props.bairro}</span>
              </Text>
            </Grid>
            <Grid item>
              <Text>
                <strong>Cidade:</strong> <span>{props.cidade}</span>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </ItemsContainer>
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="text" color="primary" onClick={() => setOpen(!open)}>
            {open ? "recolher" : "expandir"}
          </Button>
        </Grid>
      </Grid>
    </GridItem>
  );
};

export default Item;
