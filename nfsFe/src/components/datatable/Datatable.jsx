import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const Datatable = () => {
  const columns = [
    { field: "category", headerName: "Category", width: 140 },
    { field: "item", headerName: "Item", width: 130 },
    { field: "variant", headerName: "Variant", width: 130 },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 90,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 160,
      renderCell: () => {
        return (
          <div className="cellActions">
            <button className="view">View</button>
            <button className="delete">Delete</button>
          </div>
        );
      },
    },
  ];

  const rows = [
    { id: 1, category: "Snow", item: "Jon", variant: 35, quantity: 1 },
    { id: 2, category: "Lannister", item: "Cersei", variant: 42, quantity: 1 },
    { id: 3, category: "Lannister", item: "Jaime", variant: 45, quantity: 1 },
    { id: 4, category: "Stark", item: "Arya", variant: 16, quantity: 1 },
    {
      id: 5,
      category: "Targaryen",
      item: "Daenerys",
      variant: null,
      quantity: 1,
    },
    { id: 6, category: "Melisandre", item: null, variant: 150, quantity: 1 },
    { id: 7, category: "Clifford", item: "Ferrara", variant: 44, quantity: 1 },
    { id: 8, category: "Frances", item: "Rossini", variant: 36, quantity: 1 },
    { id: 9, category: "Roxie", item: "Harvey", variant: 65, quantity: 1 },
  ];
  return (
    <div className="datatable">
      <div className="title">list title</div>
      <div className="gridcontainer">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default Datatable;
