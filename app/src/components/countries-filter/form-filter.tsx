/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { orderByName } from '~/src/utils/order-by-name';
import { ReactComponent as Search } from '~/assets/icons/search.svg';
import Table from '../table';

interface Properties {
  data: Array<{}>;
}

const FormFilter = ({ data }: Properties) => {
  const [keyword, setKeyword] = useState<string>('');
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [storedData, setStoredData] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<string>('');

  // Order data by name function
  const orderedData = orderByName(data);

  // Handle search keyword function
  const handleKeyword = useCallback((event: any) => {
    setKeyword(event.target.value);
  }, []);

  // Search function
  const search = useCallback(() => {
    setFilterActive(true);
    setFilteredData([
      ...data.filter(
        (country: any) =>
          country.name.common === keyword ||
          country.name.common.includes(keyword) ||
          country.name.common.toLowerCase().includes(keyword.toLowerCase())
      ),
    ]);
  }, [data, keyword]);

  // Filter function
  const filter = useCallback(
    (event: any) => {
      setFilterActive(true);
      setFilteredData([
        ...data.filter(
          (country: any) => country.name.common === event.target.value
        ),
      ]);
    },
    [data]
  );

  // Stored Data Updater
  useEffect(() => {
    setStoredData(storedData.concat(filteredData));
    filterActive && filteredData.length == 0
      ? setFeedback('No results')
      : setFeedback('');
  }, [filteredData]);

  // Reset history function
  const resetHistory = useCallback(() => {
    setStoredData([]);
  }, []);

  // Remake sort function
  const remakeSort = useCallback(
    (keyword: string) => {
      setFilterActive(true);
      setFilteredData([
        ...data.filter((country: any) => country.name.common === keyword),
      ]);
    },
    [data]
  );

  return (
    <div className="mx-auto max-w-[62.5rem]">
      <form className="form-filter grid grid-cols-1 lg:grid-cols-2 gap-5">
        <h1 className="col-span-full text-4xl lg:text-6xl font-extralight text-blue lg:mb-5 animate-fadein">
          Search for a country/
        </h1>
        <fieldset className="col-span-full lg:col-span-1">
          <input
            type="text"
            placeholder="Search by country name"
            onChange={(event) => handleKeyword(event)}
          />
          <button className="search-btn" type="button" onClick={() => search()}>
            <Search className="w-6 h-6" />
          </button>
        </fieldset>
        <fieldset className="col-span-full lg:col-span-1">
          <select onChange={(event) => filter(event)}>
            <option disabled selected>
              Select country
            </option>
            {orderedData.length &&
              orderedData.map((option: any, index: number) => (
                <option value={option.name.common} key={`option-${index}`}>
                  {option.name.common}
                </option>
              ))}
          </select>
        </fieldset>
      </form>
      {filteredData.length > 0 && (
        <Table data={filteredData} title="Results:" />
      )}
      {feedback && (
        <h2 className="text-3xl lg:text-4xl font-extralight text-blue mt-10 mb-5 animate-fadein">
          {feedback}
        </h2>
      )}
      {storedData.length > 0 && (
        <Table
          data={storedData}
          title="History:"
          reset={resetHistory}
          downloadCSV
          remakeSort={remakeSort}
        />
      )}
    </div>
  );
};

export default FormFilter;
