import Chart from "../../../components/chart/Chart";
import SingleDetail from "../../../components/singleDetail/singleDetail";
import TabList from "../../../components/table/Table";
import lastSalesData from "../../../helpers/dataSource/data";
import "./customerDetail.scss";

const CustomerDetail = () => {
  return (
    <div className="customerDetail">
      <div className="top">
        <SingleDetail />
      </div>
      <div className="bottom">
        <div className="left">
          <TabList data={lastSalesData} />
        </div>
        <div className="right">
          <Chart />
        </div>
      </div>
    </div>
  );
};
export default CustomerDetail;
