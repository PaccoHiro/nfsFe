import Datatable from "../../../components/datatable/Datatable";
import { datagridSource } from "../../../helpers/dataSource/datagridSource";
import "./customers.scss";

const Customers = () => {
  return (
    <div className="customers">
      <Datatable data={datagridSource} />
    </div>
  );
};
export default Customers;
