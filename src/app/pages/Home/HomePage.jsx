import React from 'react'
import useAuthorize from '../../../hooks/useAuthorize'

const HomePage = () => {
  useAuthorize();
  return (
    <div>HomePage</div>
  )
}

export default HomePage