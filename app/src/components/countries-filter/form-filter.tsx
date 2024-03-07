import React from 'react'
import { orderByName } from '~/src/utils/order-by-name'
import {ReactComponent as Search} from '~/assets/icons/search.svg'

interface Properties {
  data: Array<{}>
}

const FormFilter = ({data}: Properties) => {

  // Function to order data by name
  const orderedData = orderByName(data)

  return (
    <form className='form-filter grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[62.5rem]'>
      <fieldset className='col-span-full lg:col-span-1'>
        <input type="text" placeholder='Search by country name' />
        <button type='button'>
          <Search className="text-blue" />
        </button>
      </fieldset>
      <fieldset className='col-span-full lg:col-span-1'>
        <select>
          <option disabled selected>Select country</option>
          {orderedData.length && orderedData.map((option: any, index: number) => (
            <option value={option.name.common} key={`option-${index}`}>
              {option.name.common}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className='col-span-full'>

      </fieldset>
    </form>
  )
}

export default FormFilter