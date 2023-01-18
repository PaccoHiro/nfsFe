import Dstatus from "../../components/deleveryStatus/Dstatus";

export const dataGridOrders = {
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
      field: "customer",
      headerName: "Customer",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "phone",
      headerName: "Phone",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "shipping",
      headerName: "Shipping Mode",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "total",
      headerName: "Total",
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
  ],

  rows: [
    {
      id: 1,
      date: "02/11/2023",
      customer: "Snow",
      phone: "12354896",
      shipping: "safi",
      total: 999,
      state: "Delivered",
    },
    {
      id: 2,
      date: "02/11/2023",
      customer: "Lannister",
      phone: "156877565",
      shipping: "casa",
      total: 999,
      state: "Delivered",
    },
    {
      id: 3,
      date: "02/11/2023",
      customer: "Lannister",
      phone: "45964442",
      shipping: "lisbone",
      total: 999,
      state: "Delivered",
    },
    {
      id: 4,
      date: "02/11/2023",
      customer: "Stark",
      phone: "65224962",
      shipping: "barcelone",
      total: 999,
      state: "Delivered",
    },
    {
      id: 5,
      date: "02/11/2023",
      customer: "Stark",
      phone: "9632541",
      shipping: "paris",
      total: 999,
      state: "Delivered",
    },
    {
      id: 6,
      date: "02/11/2023",
      customer: "Melisandre",
      phone: null,
      shipping: "london",
      total: 999,
      state: "Delivered",
    },
    {
      id: 7,
      date: "02/11/2023",
      customer: "Clifford",
      phone: "8553321",
      shipping: "torino",
      total: 999,
      state: "Delivered",
    },
    {
      id: 8,
      date: "02/11/2023",
      customer: "Frances",
      phone: "1235843",
      shipping: "NY",
      total: 999,
      state: "Delivered",
    },
    {
      id: 9,
      date: "02/11/2023",
      customer: "Roxie",
      phone: "6541234",
      shipping: "toronto",
      total: 999,
      state: "Delivered",
    },
  ],
};
