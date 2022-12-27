import Datatable from "../../components/datatable/Datatable";
import { datagridSource } from "../../helpers/dataSource/datagridSource";
import "./products.scss";

const Products = () => {
  return (
    <div className="products">
      <Datatable data={datagridSource} />
    </div>
  );
};
export default Products;
