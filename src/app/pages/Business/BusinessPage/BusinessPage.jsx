import React from 'react'
import useAuthorize from '../../../../hooks/useAuthorize';


const BusinessPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  console.log(isAuthenticated, loading, user);
  return (
    <div>BusinessPage</div>
  )
}

export default BusinessPage