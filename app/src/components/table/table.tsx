import React from 'react'

interface Properties {
  data: any
  title: string
}

const Table = ({data, title}: Properties) => {
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
                <td>{country.flag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table;
