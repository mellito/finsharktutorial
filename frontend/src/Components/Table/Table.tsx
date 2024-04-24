/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Props {
  configs: any;
  data: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table: React.FC<Props> = ({ configs, data }: Props): JSX.Element => {
  const renderRows = data?.map((company: any) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any, index: number) => {
          return (
            <td
              key={index}
              className="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
            >
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderHeaders = configs.map((configData: any) => {
    return (
      <th className="p-4 text-left text-xs text-gray-500 uppercase tracking-wider">
        {configData.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 overflow-auto ">
      <table>
        <thead className="min-w-full divide-y divide-gray-200 m-5">
          <thead>{renderHeaders}</thead>
          <tbody>{renderRows}</tbody>
        </thead>
      </table>
    </div>
  );
};

export default Table;
