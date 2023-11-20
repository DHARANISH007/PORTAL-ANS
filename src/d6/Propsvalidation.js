import React from 'react'
import PropTypes from 'prop-types'
export default function Propsvalidation(props) {
  return (
    <div>
      <p> I am {props.name}</p>
    </div>
  )
}
Propsvalidation.propTypes={name:PropTypes.string}

