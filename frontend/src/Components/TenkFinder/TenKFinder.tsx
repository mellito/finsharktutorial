/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import { getTenKData } from "../../api";
import TenKFinderItem from "./TenKFinderItem";
import Spinner from "../Spinner/Spinner";

interface Props {
  ticker: string;
}

const TenKFinder: React.FC<Props> = ({ ticker }: Props): JSX.Element => {
  const [companyData, setCompanyDate] = useState<CompanyTenK[]>();
  useEffect(() => {
    const getTenK = async () => {
      const result = await getTenKData(ticker);
      setCompanyDate(result!.data);
    };
    getTenK();
  }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData.slice(0, 5).map((tenK) => <TenKFinderItem tenK={tenK} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
