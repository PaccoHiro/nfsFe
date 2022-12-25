import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TabList = ({ data }) => {
  //   console.log(data);
  const title = data.title;
  const tabHead = data.tabHead;
  const rows = data.rows;

  return (
    <div className="table">
      <p className="title">{title} </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tabHead.map((hCell, i) => (
                <TableCell key={hCell} className="tabCell">
                  {hCell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                {row.map((rowCell, i) => (
                  <TableCell key={tabHead[i]} className="tabCell">
                    {rowCell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TabList;
