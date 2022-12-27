import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";

const Root = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route path="/">
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Route>
  </>
);

export default Root;
