'use client';

import React, { useEffect, useState } from 'react';
import { getCountries } from '~/src/services/countries-api';
import FormFilter from './form-filter';

const CountriesFilter = () => {
  // Initial countries values
  const [countries, setCountries] = useState([]);

  // Countries Rest API function
  useEffect(() => {
    getCountries()
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="lg:min-h-screen lg:flex lg:items-center py-20">
      <div className="container">
        <FormFilter data={countries} />
      </div>
    </section>
  );
};

export default CountriesFilter;
