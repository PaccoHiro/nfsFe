import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Dashboard from "./dashboard/Dashboard";

const Root = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route path="/">
        <Route index element={<Dashboard />} />
      </Route>
    </Route>
  </>
);

export default Root;
