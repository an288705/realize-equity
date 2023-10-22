import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import DashBoard from "../views/dashboard/Dashboard";
import AccountChart from "../views/dashboard/AccountChart";
import InvestPage from "../views/dashboard/InvestPage";
import OrderPage from "../views/components/OrderPage";
import TransferPage from "../views/dashboard/TransferPage";
import TransactionsPage from "../views/dashboard/TransactionsPage";
import ProfilePage from "../views/dashboard/ProfilePage";

export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in/" element={<SignIn />} />
        <Route path="/sign-up/" element={<SignUp />} />
        <Route
          path="/dashboard/"
          element={<DashBoard page={<AccountChart />} />}
        />
        <Route
          path="/dashboard/invest"
          element={<DashBoard page={<InvestPage />} />}
        />
        <Route
          path="/dashboard/invest/order"
          element={<DashBoard page={<OrderPage />} />}
        />
        <Route
          path="/dashboard/transfer"
          element={<DashBoard page={<TransferPage />} />}
        />
        <Route
          path="/dashboard/transactions"
          element={<DashBoard page={<TransactionsPage />} />}
        />
        <Route
          path="/dashboard/profile"
          element={<DashBoard page={<ProfilePage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
