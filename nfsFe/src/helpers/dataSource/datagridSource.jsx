import QtyCaution from "../../components/qtyCaution/QtyCution";

export const datagridSource = {
  title: "Items : ",

  columns: [
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "item",
      headerName: "Item",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "variant",
      headerName: "Variant",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerAlign: "center",
      align: "center",
      type: "number",
      flex: 1,
      renderCell: (params) => <QtyCaution qty={params.row.quantity} />,
    },
  ],

  rows: [
    { id: 1, category: "Snow", item: "Jon", variant: 35, quantity: 23 },
    { id: 2, category: "Lannister", item: "Cersei", variant: 42, quantity: 3 },
    { id: 3, category: "Lannister", item: "Jaime", variant: 45, quantity: 6 },
    { id: 4, category: "Stark", item: "Arya", variant: 16, quantity: 10 },
    {
      id: 5,
      category: "Targaryen",
      item: "Daenerys",
      variant: null,
      quantity: 13,
    },
    { id: 6, category: "Melisandre", item: null, variant: 150, quantity: 2 },
    { id: 7, category: "Clifford", item: "Ferrara", variant: 44, quantity: 8 },
    { id: 8, category: "Frances", item: "Rossini", variant: 36, quantity: 30 },
    { id: 9, category: "Roxie", item: "Harvey", variant: 65, quantity: 1 },
  ],
};
