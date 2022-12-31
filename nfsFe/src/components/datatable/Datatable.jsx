import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import ActionsColumn from "../actionsColumn/ActionsColumns";

const Datatable = ({ data }) => {
  const actionsColumn = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      sortable: false,
      flex: 3,
      renderCell: () => <ActionsColumn />,
    },
  ];
  return (
    <div className="datatable">
      <div className="title">{data.title}</div>
      <div className="gridcontainer">
        <DataGrid
          rows={data.rows}
          columns={data.columns.concat(actionsColumn)}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default Datatable;
