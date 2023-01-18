import QtyCaution from "../../components/qtyCaution/QtyCution";

export const dataGridCustomers = {
  title: "Customers : ",

  columns: [
    {
      field: "customer",
      headerName: "Customer",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "tel",
      headerName: "N°Tel",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "city",
      headerName: "City",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
  ],

  rows: [
    { id: 1, customer: "Snow", tel: "12354896", city: "safi" },
    { id: 2, customer: "Lannister", tel: "156877565", city: "casa" },
    { id: 3, customer: "Lannister", tel: "45964442", city: "lisbone" },
    { id: 4, customer: "Stark", tel: "65224962", city: "barcelone" },
    { id: 5, customer: "Stark", tel: "9632541", city: "paris" },
    { id: 6, customer: "Melisandre", tel: null, city: "london" },
    { id: 7, customer: "Clifford", tel: "8553321", city: "torino" },
    { id: 8, customer: "Frances", tel: "1235843", city: "NY" },
    { id: 9, customer: "Roxie", tel: "6541234", city: "toronto" },
  ],
};
