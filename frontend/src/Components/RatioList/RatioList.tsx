/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Props {
  config: any;
  data: any;
}

const RatioList: React.FC<Props> = ({ config, data }: Props): JSX.Element => {
  const renderedRows = config.map(
    (
      row: {
        label:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined;
        subTitle: any;
        render: (
          arg0: any
        ) =>
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined;
      },
      index: number
    ) => {
      return (
        <li key={index} className="py-2 sm:py-4 ">
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {row.label}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {row.subTitle && row.subTitle}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold-text-gray-900">
              {row.render(data)}
            </div>
          </div>
        </li>
      );
    }
  );
  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full w-full">
      <ul className="divide-y divided-gray-200"> {renderedRows}</ul>
    </div>
  );
};

export default RatioList;
