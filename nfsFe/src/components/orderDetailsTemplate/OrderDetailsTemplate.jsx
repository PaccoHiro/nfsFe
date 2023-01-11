import "./orderDetailsTemplate.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OrderDetailsTemplate = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const order = {
    Discount: {
      isApplied: true, // false or true
      rule: {
        discNature: "Percentage", //'Percentage' or 'Fixed Amount'
        amount: 10,
      },
    },
  };

  const totalPrice = (order) => {
    let totalPrice = 100;
    if (order?.orderlist) {
      for (let i = 0; i < order.ordrlist.length; i++) {
        totalPrice += order.ordrlist[i].price;
      }
      return totalPrice;
    }
    return totalPrice;
  };

  const discount = (order) => {
    return order?.Discount?.rule?.discNature === "Percentage"
      ? (totalPrice(order) * order.Discount.rule.amount) / 100
      : order?.Discount?.rule?.discNature === "Fixed Amount"
      ? order.Discount.rule.amount
      : null;
  };

  const DiscountRows = ({ order }) => {
    return (
      order.Discount.isApplied && (
        <>
          <TableRow>
            <TableCell className="subcellkey" align="center">
              Discount
            </TableCell>

            {order.Discount.rule.discNature === "Percentage" ? (
              <TableCell className="subcellvalue" align="center">
                {`${(totalPrice(order) * discount(order)) / 100}(${discount(
                  order
                )}%) `}
              </TableCell>
            ) : order.Discount.rule.discNature === "Fixed Amount" ? (
              <TableCell className="subcellvalue" align="center">
                {discount(order)}
              </TableCell>
            ) : null}
          </TableRow>
          <TableRow>
            <TableCell className="subcellkey" align="center">
              SubTotal with discount{" "}
            </TableCell>

            <TableCell className="subcellvalue" align="center">
              {totalPrice(order) - discount(order)}
            </TableCell>
          </TableRow>
        </>
      )
    );
  };

  return (
    <div className="orderdetailstemplate">
      {/* <div className="title">orderdetails</div>
      <div className="tabContainer">

        </div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow className="hrow">
              <TableCell width={"5%"} className="hcell" align="center">
                #
              </TableCell>
              <TableCell width={"35%"} className="hcell" align="center">
                Item
              </TableCell>
              <TableCell width={"25%"} className="hcell" align="center">
                Quantity
              </TableCell>
              <TableCell width={"25%"} className="hcell" align="center">
                SubTotal
              </TableCell>
              <TableCell className="hcell" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow className="brow" key={i}>
                <TableCell className="idcell" align="center">
                  {i}
                </TableCell>
                <TableCell className="bcell" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">
                  <div className="tabActions">
                    <div className="actionView">view</div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                className="spanleft"
                rowSpan={order?.Discount?.isApplied ? 5 : 4}
                colSpan={2}
              />
              <TableCell className="subcellkey" align="center">
                Subtotal
              </TableCell>
              <TableCell className="subcellvalue" align="center">
                123
              </TableCell>
              <TableCell
                className="spanright"
                rowSpan={order?.Discount?.isApplied ? 5 : 4}
                // colSpan={1}
              />
            </TableRow>
            <TableRow>
              <TableCell className="subcellkey" align="center">
                Shipping Cost
              </TableCell>
              <TableCell className="subcellvalue" align="center">
                999
              </TableCell>
            </TableRow>
            <DiscountRows order={order} />
            <TableRow>
              <TableCell className="subcellkey" align="center">
                Total
              </TableCell>
              <TableCell className="subcellvalue" align="center">
                33265
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default OrderDetailsTemplate;
