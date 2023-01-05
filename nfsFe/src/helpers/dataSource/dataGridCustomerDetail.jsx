import Dstatus from "../../components/deleveryStatus/Dstatus";

export const dataGridCustomerDetail = {
  title: "Orders : ",

  columns: [
    {
      field: "date",
      headerName: "Date",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "state",
      headerName: "State",
      headerAlign: "center",
      align: "center",
      flex: 3,
      renderCell: (params) => <Dstatus status={params.row.state} />,
    },
    {
      field: "total",
      headerName: "Total",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
  ],

  rows: [
    { id: 1, date: "02/11/2036", state: "Delivered", total: "123" },
    { id: 2, date: "08/07/2023", state: "Processing", total: "756" },
    { id: 3, date: "04/08/2012", state: "Returned", total: "34" },
    { id: 4, date: "06/05/2024", state: "Processing", total: "789" },
    { id: 5, date: "22/06/2011", state: "Delivered", total: "1286" },
    { id: 6, date: "03/07/2055", state: null, total: "88" },
    { id: 7, date: "14/09/2014", state: "Returned", total: "56" },
  ],
};
