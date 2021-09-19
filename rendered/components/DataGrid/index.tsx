import React, { useEffect, useMemo } from "react";
import { Container } from "./styles";
import Item from "./Item";
import { connect } from "react-redux";
import { States, DataGridDataType } from "@reducers/index";
import { LoadDataGridRequest } from "@actions/dispachs/DataGridEvents";
import { EditClient } from "@actions/dispachs/FormRegisterEvents";
import Skeleton from "./Skeleton";

interface Props {
  clients: DataGridDataType[];
  loading: boolean;
}
interface Dispatch {
  loadDataGrid: () => void;
  editClient: (client: DataGridDataType) => void;
}

const mapStateToProps = (props: States): Props => ({
  clients: props.DataGridData,
  loading: props.DataGridLoading,
});
const mapDispatchToProps = (dispatch: any): Dispatch => ({
  loadDataGrid: () => dispatch(LoadDataGridRequest()),
  editClient: (client) => dispatch(EditClient(client)),
});

const DataGrid: React.FC<Props & Dispatch> = (props) => {
  useEffect(props.loadDataGrid, []);

  const grid = useMemo(
    () =>
      props.clients.map((client, index) => (
        <Item
          key={index}
          handleEdit={() => props.editClient(client)}
          {...client}
        />
      )),
    [props.clients]
  );
  return <Container>{props.loading ? <Skeleton /> : grid}</Container>;
};

export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);
