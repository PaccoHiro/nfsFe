import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";
import ProductDetail from "./productDetail/ProductDetail";
import NewItem from "./newItem/NewItem";

const Root = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route path="/">
        <Route index element={<Dashboard />} />
        <Route path="items">
          <Route index element={<Products />} />
          <Route path=":itemId" element={<ProductDetail />} />
          <Route path="new" element={<NewItem />} />
        </Route>
      </Route>
    </Route>
  </>
);

export default Root;
