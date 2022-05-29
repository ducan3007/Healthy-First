import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "../pages/Home/PageLayout";
import Login from "../pages/Login/Login";
import NotFound from "../pages/404/NotFound";
import HomePage from "../pages/Home/HomePage";
import AccountPage from "../pages/Account/AccountPage/AccountPage";
import AccountDetailPage from "../pages/Account/AccountDetailPage/AccountDetail";
import BusinessPage from "../pages/Business/BusinessPage/BusinessPage";
import BusinessDetailPage from "../pages/Business/BusinessDetail/BusinessDetail";
import PlanPage from "../pages/Plan/PlanPage/PlanPage";
import PlanDetailPage from "../pages/Plan/PlanDetail/PlanDetail";

const privateRoutes = [
  { path: "/", component: HomePage },
  { path: "/account", component: AccountPage },
  { path: "/account/:user_id", component: AccountDetailPage },
  { path: "/business", component: BusinessPage },
  { path: "/business/:business_id", component: BusinessDetailPage },
  { path: "/plan", component: PlanPage },
  { path: "/plan/:plan_id", component: PlanDetailPage },
];

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {privateRoutes.map((route, index) => {
        return <Route key={index} path={route.path} element={<PageLayout>{<route.component />}</PageLayout>} />;
      })}
      {/* <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/account/:user_id" element={<AccountDetailPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/business/:business_id" element={<BusinessDetailPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/plan/:plan_id" element={<PlanDetailPage />} />
      </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
