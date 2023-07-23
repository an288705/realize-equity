import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import DashBoard from "../views/dashboard/Dashboard";
import AccountChart from "../views/dashboard/AccountChart";
import InvestPage from "../views/dashboard/InvestPage";
import AddFundsPage from "../views/dashboard/AddFundsPage";
import ProfilePage from "../views/dashboard/ProfilePage";

export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/premium-themes/onepirate/" element={<Home />} />
        <Route path="/premium-themes/onepirate/sign-in/" element={<SignIn />} />
        <Route path="/premium-themes/onepirate/sign-up/" element={<SignUp />} />
        <Route
          path="/premium-themes/onepirate/dashboard/"
          element={<DashBoard page={<AccountChart />} />}
        />
        <Route
          path="/premium-themes/onepirate/dashboard/invest"
          element={<DashBoard page={<InvestPage />} />}
        />
        <Route
          path="/premium-themes/onepirate/dashboard/add-funds"
          element={<DashBoard page={<AddFundsPage />} />}
        />
        <Route
          path="/premium-themes/onepirate/dashboard/profile"
          element={<DashBoard page={<ProfilePage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
