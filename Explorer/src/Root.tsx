import { Outlet } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";

const Root = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
};

export default Root;
