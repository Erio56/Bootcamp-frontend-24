import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";

const Root = () => {

  return (
    <>
      <div id="detail">
        <Navbar/>
        <Outlet />
      </div>
    </>
  );
}

export default Root;