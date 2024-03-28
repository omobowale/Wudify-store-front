import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, bgClassName="bg-transparent" }) {
  return (
    <div className="relative">
      <Header />
      <div className={`${bgClassName}`} style={{ minHeight: "100vh" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
