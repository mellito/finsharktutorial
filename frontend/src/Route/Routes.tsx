import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/HomePage";
import Search from "../Pages/Search/SearchPage";
import Company from "../Pages/Company/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheetStatement from "../Components/BalanceSheetStatement/BalanceSheetStatement";
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        path: "search",
        element: (
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        ),
      },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker",
        element: (
          <ProtectedRoute>
            <Company />
          </ProtectedRoute>
        ),
        children: [
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
          {
            path: "balance-sheet-statement",
            element: <BalanceSheetStatement />,
          },
          {
            path: "cash-flow",
            element: <CashFlowStatement />,
          },
        ],
      },
    ],
  },
]);
