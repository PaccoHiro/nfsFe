import Widget from "../../components/widget/Widget";
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
      <div className="dashcenter">dashcenter</div>
      <div className="dashbottom">dashbottom</div>
    </div>
  );
};
export default Dashboard;
