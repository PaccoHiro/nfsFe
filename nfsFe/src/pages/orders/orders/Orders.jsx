import Datatable from "../../../components/datatable/Datatable";
import { dataGridOrders } from "../../../helpers/dataSource/dataGridOrders";

import "./orders.scss";

const Orders = () => {
  return (
    <div className="orders">
      <Datatable data={dataGridOrders} rowsperpage={14} />
    </div>
  );
};
export default Orders;
