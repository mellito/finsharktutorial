/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAllAPI,
} from "../../Services/PortfolioServices";
import { toast } from "react-toastify";

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchPage: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );
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

  const getPortfolio = () => {
    portfolioGetAllAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res.data);
        }
      })
      .catch((e: any) => {
        toast.warning("Could not get portfolio values! error: " + e);
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status == 204) {
          toast.success("Stock Added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e: any) => {
        toast.warning("Could not create portfolio item! error: " + e);
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPortDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Stock Delete from portfolio!");
          getPortfolio();
        }
      })
      .catch((e: any) => {
        toast.warning("Could not delete portfolio item! error: " + e);
      });
  };

  useEffect(() => {
    getPortfolio();
  }, []);

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
