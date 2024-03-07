import Link from 'next/link'
import React from 'react'

interface Properties {
    url: string
    text: string
    blank: boolean
}

const Cta = ({url, text = '', blank}: Properties) => {
  return (
    <Link className='cta' href={url} target={blank ? '_blank' : ''}>{text}</Link>
  )
}

export default Cta