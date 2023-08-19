import Dstatus from "../../components/deleveryStatus/Dstatus";

export const dataGridUsers = {
  title: "Users : ",

  columns: [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "user",
      headerName: "User",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "jDate",
      headerName: "Join Date",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "role",
      headerName: "Role",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "lastSale",
      headerName: "Date of Last Sale",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
    {
      field: "avSales",
      headerName: "Monthly Sales Average",
      headerAlign: "center",
      align: "center",
      flex: 3,
    },
  ],

  rows: [
    {
      id: 1,
      jDate: "02/11/2023",
      user: "Snow",
      phone: "12354896",
      email: "Email@gmail.com",
      role: "EMPLOYEE",
      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 2,
      jDate: "02/11/2023",
      user: "Lannister",
      phone: "156877565",
      email: "Email@gmail.com",
      role: "ADMIN",

      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 3,
      jDate: "02/11/2023",
      user: "Lannister",
      phone: "45964442",
      email: "Email@gmail.com",
      role: "EMPLOYEE",

      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 4,
      jDate: "02/11/2023",
      user: "Stark",
      phone: "65224962",
      email: "Email@gmail.com",
      role: "EMPLOYEE",

      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 5,
      jDate: "02/11/2023",
      user: "Stark",
      phone: "9632541",
      email: "Email@gmail.com",
      role: "EMPLOYEE",

      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 6,
      jDate: "02/11/2023",
      user: "Melisandre",
      phone: null,
      email: "Email@gmail.com",
      role: "EMPLOYEE",

      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 7,
      jDate: "02/11/2023",
      user: "Clifford",
      phone: "8553321",
      email: "Email@gmail.com",
      role: "EMPLOYEE",

      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 8,
      jDate: "02/11/2023",
      user: "Frances",
      phone: "1235843",
      email: "Email@gmail.com",
      role: "EMPLOYEE",

      lastSale: "15/05/2025",
      avSales: 720,
    },
    {
      id: 9,
      jDate: "02/11/2023",
      user: "Roxie",
      phone: "6541234",
      email: "Email@gmail.com",
      role: "MANAGER",

      lastSale: "15/05/2025",
      avSales: 720,
    },
  ],
};
