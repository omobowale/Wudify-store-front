import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="relative">
      <Header />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
