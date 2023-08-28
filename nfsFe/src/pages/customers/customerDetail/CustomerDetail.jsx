import Datatable from "../../../components/datatable/Datatable";
import SingleDetail from "../../../components/singleDetail/SingleDetail";
import { dataDetailCustomer } from "../../../helpers/dataSource/dataDetailCutomer";
import { dataGridCustomerDetail } from "../../../helpers/dataSource/dataGridCustomerDetail";
import "./customerDetail.scss";

const CustomerDetail = () => {
  return (
    <div className="customerDetail">
      <div className="top">
        <SingleDetail data={dataDetailCustomer} />
      </div>
      <div className="bottom">
        <Datatable data={dataGridCustomerDetail} rowsperpage={8} />
      </div>
    </div>
  );
};
export default CustomerDetail;
