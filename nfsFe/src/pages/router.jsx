import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../helpers/protectedRoute/ProtectedRoute";
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
import NewUser from "./users/newUser/NewUser";
import UpdateUser from "./users/updateUser/UpdateUser";
import Login from "./login/Login";

const Root = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<ProtectedRoute element={<Layout />} />} >
      <Route index element={<Dashboard />} />
      <Route path="items" element={<Routes>
        <Route index element={<Products />} />
        <Route path=":itemId" element={<ProductDetail />} />
        <Route path="new" element={<NewItem />} />
      </Routes>} />
      <Route path="customers" element={<Routes>
        <Route index element={<Customers />} />
        <Route path=":customerId" element={<CustomerDetail />} />
        <Route path="new" element={<NewCustomer />} />
      </Routes>} />
      <Route path="orders" element={<Routes>
        <Route index element={<Orders />} />
        <Route path=":orderId" element={<OrderDetail />} />
        <Route path="new" element={<NewOrder />} />
      </Routes>} />
      <Route path="users" element={<Routes>
        <Route index element={<Users />} />
        <Route path=":userId" element={<UserDetails />} />
        <Route path=":userId/update" element={<UpdateUser />} />
        <Route path="new" element={<NewUser />} />
      </Routes>} />
    </Route>
  </Routes>
);

export default Root;
