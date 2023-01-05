import Datatable from "../../../components/datatable/Datatable";
import { dataGridCustomers } from "../../../helpers/dataSource/dataGridCustomers";

import "./customers.scss";

const Customers = () => {
  return (
    <div className="customers">
      <Datatable data={dataGridCustomers} />
    </div>
  );
};
export default Customers;
