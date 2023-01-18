import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import TabList from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import lastSalesData, { topSellers } from "../../helpers/dataSource/data";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="widgets">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>
      <div className="charts">
        {/* <Featured />
        <Chart /> */}

        <div className="contfeatured">
          <Featured />
        </div>
        <div className="contchart">
          <Chart />
        </div>
      </div>
      <div className="lists">
        <TabList data={lastSalesData} />
        <TabList data={topSellers} />
      </div>
    </div>
  );
};
export default Dashboard;
