import axios from "axios";

export const getCountries =  async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,languages')
    return response
  } catch (error) {
    throw new Error('Error on list countries')
  }
}