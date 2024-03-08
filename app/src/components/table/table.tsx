import classNames from 'classnames';
import React from 'react';
import { convertToCsv } from '~/src/utils/convert-to-csv';

interface Properties {
  data: any;
  title: string;
  reset?: () => void;
  downloadCSV?: boolean;
  remakeSort?: (keyword: string) => void;
}

const Table = ({
  data,
  title,
  reset,
  downloadCSV = false,
  remakeSort,
}: Properties) => {
  return (
    <>
      <h2 className="text-3xl lg:text-4xl font-extralight text-blue mt-10 mb-5">
        {title}
      </h2>
      <div className="table-wrapper animate-fadein overflow-x-auto lg:overflow-hidden">
        <table className="result-table">
          <thead>
            <tr>
              <td>Country name</td>
              <td>Capital</td>
              <td>Language</td>
              <td>Currency</td>
              <td>Population</td>
              <td>Flag</td>
            </tr>
          </thead>
          <tbody>
            {data.map((country: any, index: number) => (
              <tr
                className={classNames({
                  'cursor-pointer': remakeSort,
                })}
                key={`country-${index}`}
                onClick={() => {
                  remakeSort && remakeSort(country.name.common);
                }}
              >
                <td>{country.name.common}</td>
                <td>{country.capital}</td>
                <td>
                  {Object.keys(country.languages)[0] &&
                    Object.keys(country.languages)[0].toUpperCase()}
                </td>
                <td>
                  {Object.keys(country.currencies)[0] &&
                    Object.keys(country.currencies)[0]}
                </td>
                <td>{country.population}</td>
                <td>{country.flag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {downloadCSV && (
        <div className="mt-5 flex gap-x-3 lg:justify-center">
          {reset && (
            <button type="button" className="cta" onClick={reset}>
              Reset
            </button>
          )}
          <button
            type="button"
            className="cta"
            onClick={() => convertToCsv(JSON.stringify(data))}
          >
            Export CSV
          </button>
        </div>
      )}
    </>
  );
};

export default Table;
