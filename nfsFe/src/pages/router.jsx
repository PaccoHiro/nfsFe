import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import App from "../App";
import Layout from "../layout/Layout";
import Dashboard from "./dashboard/Dashboard";
import Products from "./product/products/Products";
import ProductDetail from "./product/productDetail/ProductDetail";
import NewItem from "./product/newItem/NewItem";
import Customers from "./customers/customers/Customers";
import CustomerDetail from "./customers/customerDetail/CustomerDetail";
import NewCustomer from "./Customers/newCustomer/NewCustomer";
import OrderDetail from "./orders/orderDetail/orderDetail";
import Orders from "./orders/orders/Orders";
import NewOrder from "./orders/newOrder/NewOrder";
import Users from "./users/users/Users";
import UserDetails from "./users/userDetails/UserDetails";

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
        <Route path="customers">
          <Route index element={<Customers />} />
          <Route path=":customerId" element={<CustomerDetail />} />
          <Route path="new" element={<NewCustomer />} />
        </Route>
        <Route path="orders">
          <Route index element={<Orders />} />
          <Route path=":customerId" element={<OrderDetail />} />
          <Route path="new" element={<NewOrder />} />
        </Route>
        <Route path="users">
          <Route index element={<Users />} />
          <Route path=":customerId" element={<UserDetails />} />
          {/* <Route path="new" element={<NewOrder />} /> */}
        </Route>
      </Route>
    </Route>
  </>
);

export default Root;
