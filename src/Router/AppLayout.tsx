import { Outlet } from "react-router";

import Navigation from "../Components/Navigation/Navigation";

const AppLayout = () => {
  return (
    <>
      <Navigation />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;