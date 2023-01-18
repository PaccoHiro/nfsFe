import Dstatus from "../../components/deleveryStatus/Dstatus";

export const dataDetailOrder = {
  // fontSize: "0.8em",
  // width: "30%",
  title: " Order Details ",
  keys: [
    "Date",
    "Customer",
    "Phone",
    "Shipping Adress",
    "Shipping City",
    "Shipping Mode",
    "State",
  ],
  values: {
    date: "02/11/2023",
    customer: "jhon Doe",
    phone: "012345465",
    shippingadress: "St Trophee House fo Dragons",
    shippingcity: "New York",
    shippingmode: "Handler",
    state: <Dstatus status={"Delivered"} />,
  },
};
