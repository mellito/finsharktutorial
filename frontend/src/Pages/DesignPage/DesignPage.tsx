/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { testIncomeStatementData } from "../../Components/Table/testData";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const data = testIncomeStatementData;
type Company = (typeof data)[0];
const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DesignPage: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        this is Finshak's design page. this is where we will house variable
        design aspect of the app
      </h2>
      <RatioList config={tableConfig} data={testIncomeStatementData} />
      <Table configs={configs} data={testIncomeStatementData} />
    </>
  );
};

export default DesignPage;
