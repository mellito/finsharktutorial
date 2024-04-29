export type PortfolioGet = {
  id: number;
  symbol: string;
  companyName: string;
  purchase: number;
  lastDiv: number;
  industry: string;
  marketCap: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comments: any;
};

export type PortfolioPost = {
  symbol: string;
};

export interface PortfolioDelete extends PortfolioPost {}
