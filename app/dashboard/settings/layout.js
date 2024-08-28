import { Suspense } from "react";
import SideNav from "./components/side-nav";
import Loading from "./loading";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <aside className="col-span-4 lg:col-span-1">
        <SideNav />
      </aside>
      <div className="col-span-4 lg:col-span-3">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
};

export default Layout;
