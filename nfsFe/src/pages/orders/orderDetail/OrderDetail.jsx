import Datatable from "../../../components/datatable/Datatable";

import { dataDetailOrder } from "../../../helpers/dataSource/dataDetailOrder";
import OrderDetailsTemplate from "../../../components/orderDetailsTemplate/OrderDetailsTemplate";
import { dataGridCustomerDetail } from "../../../helpers/dataSource/dataGridCustomerDetail";
import "./orderDetail.scss";
import SingleDetail from "../../../components/singleDetail/SingleDetail";

const OrderDetail = () => {
  return (
    <div className="orderDetail">
      <div className="top">
        <SingleDetail data={dataDetailOrder} />
      </div>
      <div className="bottom">
        <OrderDetailsTemplate />
      </div>
    </div>
  );
};
export default OrderDetail;
