import React from "react";
import { Outlet } from "react-router";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CompanyDashboard: React.FC<Props> = ({
  children,
  ticker,
}: Props): JSX.Element => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-4/5">
      <div className="relative pt-10 pb-32 bg-lightBlue-500">
        <div className="mx-auto w-full pr-1">
          <div>
            <div className="flex flex-wrap">
              {children}
              <Outlet context={ticker} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
