import React, { SyntheticEvent } from "react";

interface Props {
  portfolioValue: string;
  onPortDelete: (e: SyntheticEvent) => void;
}

const DeletePortfolio: React.FC<Props> = ({
  onPortDelete,
  portfolioValue,
}: Props): JSX.Element => {
  return (
    <form onSubmit={onPortDelete}>
      <input readOnly={true} hidden={true} value={portfolioValue} />
      <button
        className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
        type="submit"
      >
        X
      </button>
    </form>
  );
};

export default DeletePortfolio;
