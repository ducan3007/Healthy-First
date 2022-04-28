import React from "react";
import useAuthorize from "../../../../hooks/useAuthorize";
const BusinessDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  console.log(isAuthenticated, loading, user);
  return <div>BusinessDetail</div>;
};

export default BusinessDetailPage;
