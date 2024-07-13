import React from "react";
import PageHeader from "../../components/page-header";

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader className="my-8" />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
