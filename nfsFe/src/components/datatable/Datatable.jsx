import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import ActionsColumn from "../actionsColumn/ActionsColumns";
import { Link } from "react-router-dom";

const Datatable = ({ data, rowsperpage }) => {
  const actionsColumn = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      sortable: false,
      flex: 3,
      renderCell: (params) => (
        <ActionsColumn id={params.row.id} slug={data.slug} />
      ),
    },
  ];
  return (
    <div className="datatable">
      <div className="dataHeadContainer">
        <div className="title">{data.title}</div>
        <Link to={`/${data.slug}/new`} className="addLink">
          <div className="addLinkContainer">Add</div>
        </Link>
      </div>
      <div className="gridcontainer">
        <DataGrid
          rows={data.rows}
          columns={data.columns.concat(actionsColumn)}
          pageSize={rowsperpage ? rowsperpage : 8}
          rowsPerPageOptions={rowsperpage ? [rowsperpage] : [8]}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default Datatable;
