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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker",
        element: <Company />,
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
