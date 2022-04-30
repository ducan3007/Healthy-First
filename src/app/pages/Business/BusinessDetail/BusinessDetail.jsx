import React from "react";
import useAuthorize from "../../../../hooks/useAuthorize";
const BusinessDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  
  return <div>BusinessDetail</div>;
};

export default BusinessDetailPage;
