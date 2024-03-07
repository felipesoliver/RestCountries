import React, { useCallback, useMemo, useState } from 'react';
import { orderByName } from '~/src/utils/order-by-name';
import { ReactComponent as Search } from '~/assets/icons/search.svg';

interface Properties {
  data: Array<{}>;
}

const FormFilter = ({ data }: Properties) => {
  const [keyword, setKeyword] = useState('')
  const [filteredData, setFilteredData] = useState<any[]>([])

  // Order data by name function
  const orderedData = orderByName(data)

  // Handle search keyword function
  const handleKeyword = useCallback((event: any) => {
    setKeyword(event.target.value)
  }, [])

  // Search function
  const search = useCallback(() => {
    setFilteredData([
      ...data.filter(
        (country: any) =>
          country.name.common === keyword ||
          country.name.common.includes(keyword)
      ),
    ])
  }, [data, keyword])

  // Filter function
  const filter = useCallback(
    (event: any) => {
      setFilteredData([
        ...data.filter(
          (country: any) => country.name.common === event.target.value
        ),
      ])
    },
    [data]
  )

  return (
    <div className="mx-auto max-w-[62.5rem]">
      <form className="form-filter grid grid-cols-1 lg:grid-cols-2 gap-5">
        <h1 className="col-span-full text-4xl lg:text-5xl font-thin text-blue lg:mb-5 animate-fadein">
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
        <>
          <h2 className="text-3xl lg:text-4xl font-extralight text-blue mt-10 mb-5">
            Results:
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
                </tr>
              </thead>
              <tbody>
                {filteredData.map((country, index) => (
                  <tr key={`country-${index}`}>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

export default FormFilter
