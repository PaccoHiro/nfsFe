import Chart from "../../../components/chart/Chart";
import SingleDetail from "../../../components/singleDetail/singleDetail";
import TabList from "../../../components/table/Table";
import lastSalesData from "../../../helpers/dataSource/data";
import { dataDetailItem } from "../../../helpers/dataSource/dataDetailItem";
import "./productDetail.scss";

const ProductDetail = () => {
  // console.log(dataDetailItem);
  return (
    <div className="productDetail">
      <div className="top">
        <SingleDetail data={dataDetailItem} />
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
export default ProductDetail;
