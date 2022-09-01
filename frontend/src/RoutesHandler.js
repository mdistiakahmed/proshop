import { Routes, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderListScreen from "./screens/OrderListScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";

export default function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/page/:pageNumber" element={<HomeScreen />}></Route>
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      ></Route>
      <Route path="/search/:keyword" element={<HomeScreen />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/register" element={<RegisterScreen />}></Route>
      <Route path="/shipping" element={<ShippingScreen />}></Route>
      <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
      <Route path="/order/:id" element={<OrderScreen />}></Route>
      <Route path="/payment" element={<PaymentScreen />}></Route>
      <Route path="/profile" element={<ProfileScreen />}></Route>
      <Route path="/product/:id" element={<ProductScreen />}></Route>
      <Route path="/cart">
        <Route path="" element={<CartScreen />} />
        <Route path=":id" element={<CartScreen />} />
      </Route>
      <Route path="/admin/userlist" element={<UserListScreen />}></Route>

      <Route path="/admin/user/:id/edit" element={<UserEditScreen />}></Route>
      <Route path="/admin/productlist" element={<ProductListScreen />}></Route>
      <Route
        path="/admin/productlist/:pageNumber"
        element={<ProductListScreen />}
      ></Route>
      <Route path="/admin/orderlist" element={<OrderListScreen />}></Route>
      <Route
        path="/admin/product/:id/edit"
        element={<ProductEditScreen />}
      ></Route>
    </Routes>
  );
}
