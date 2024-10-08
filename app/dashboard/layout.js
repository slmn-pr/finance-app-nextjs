import React from "react";
import PageHeader from "../../components/page-header";
import Button from "@/components/button";
import { ChevronLeft } from "lucide-react";

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader className="my-8" />


      <main>{children}</main>
      <footer className="mt-auto text-center py-8">footer</footer>
    </>
  );
};

export default Layout;
