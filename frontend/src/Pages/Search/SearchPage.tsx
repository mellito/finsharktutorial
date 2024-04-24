import React from "react";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchPage: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const updatedPortfolio = [...portfolioValues];
    if (!updatedPortfolio.includes(e.target[0].value)) {
      updatedPortfolio.push(e.target[0].value);
    }

    setPortfolioValues(updatedPortfolio);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPortDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter(
      (value) => value !== e.target[0].value
    );
    setPortfolioValues(removed);
  };
  return (
    <>
      <Search
        handleSearchChange={handleSearchChange}
        search={search}
        onSearchSubmit={onSearchSubmit}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortDelete={onPortDelete}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </>
  );
};

export default SearchPage;
