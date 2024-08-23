import SideNav from "./components/side-nav";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <SideNav />

      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default Layout;
