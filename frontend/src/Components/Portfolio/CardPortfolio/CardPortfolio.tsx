import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortDelete: (e: SyntheticEvent) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardPortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortDelete,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${portfolioValue}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValue.symbol}
      </Link>
      <DeletePortfolio
        onPortDelete={onPortDelete}
        portfolioValue={portfolioValue.symbol}
      />
    </div>
  );
};

export default CardPortfolio;
