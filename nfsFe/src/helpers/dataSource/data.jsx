const lastSalesData = {
  title: "last sales ",
  tabHead: ["Date", "Customer", "City", "Amount(MAD)", "Status"],
  rows: [
    [
      "11/12/2022",
      "kamal",
      "paris",
      202,
      <div className={`statusCell Delivered`}>Delivered</div>,
    ],
    [
      "02/05/2023",
      "john",
      "Barcelone",
      182,
      <div className={`statusCell Processing`}>Processing</div>,
    ],
    [
      "04/03/2023",
      "Doe",
      "Torino",
      243,
      <div className={`statusCell Returned`}>Returned</div>,
    ],
    [
      "24/04/2023",
      "Jane",
      "London",
      394,
      <div className={`statusCell Processing`}>Processing</div>,
    ],
    [
      "30/07/2023",
      "Moh",
      "Casa",
      124,
      <div className={`statusCell Returned`}>Delivered</div>,
    ],
  ],
};

export default lastSalesData;

const topSellers = {
  title: "top SalesMen ",
  tabHead: ["Name", "Avatar", "City", "Sales"],
  rows: [
    [
      "kamal",
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        alt=""
      />,
      "paris",
      202,
    ],
    [
      "john",
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        alt=""
      />,

      "Barcelone",
      182,
    ],
    [
      "Doe",
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        alt=""
      />,

      "Torino",
      243,
    ],
    [
      "Jane",
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        alt=""
      />,
      "London",
      394,
    ],
    [
      "Moh",
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        alt=""
      />,
      "Casa",
      124,
    ],
  ],
};

export { topSellers };
