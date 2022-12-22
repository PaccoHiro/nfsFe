import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";

const Root = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route path="/">
        <Route index element={<App />} />
      </Route>
    </Route>
  </>
);

export default Root;
