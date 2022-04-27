import React from "react";
import ManagerPage from "../Manager";
import Header from "../../../Components/Header/Header";
const routes = [
  {
    path: "/",
    element: <ManagerPage />,
  },
];

const Home = () => {
  return (
    <div>
      <Header></Header>
      Home
    </div>
  );
};

export default Home;
