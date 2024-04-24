import { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardList: React.FC<Props> = ({
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div>
      {searchResult.length ? (
        searchResult.map((result) => (
          <Card
            id={result.symbol}
            key={uuidv4()}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};

export default CardList;
