import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";

const layout = () => {
  return (
    <div className="bg-purple-100">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default layout;
