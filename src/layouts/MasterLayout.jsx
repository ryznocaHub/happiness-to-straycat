import React, { useContext, useRef, useState } from "react";
import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import axios from "axios";
import { useAuthStore } from "@stores/authStore";
import AppSidebar from "./context/AppSidebar";
import AppTopbar from "./context/AppTopbar";
import { LayoutContext } from "./context/layoutcontext";

function MasterLayout() {
  const {removeAuthStore, id, token, name} = useAuthStore((state) => state)
  const [message, setMessage] = useState();
  const location = useLocation()
  const menu = useRef(null);
  const navigate = useNavigate()
  const topbarRef = useRef(null);
  const sidebarRef = useRef(null);
  if (!token) {
        // not logged in so redirect to login page with the return url
        // return <Navigate to="/login" />
        return <Navigate to="/login" />
    }
  if (location.pathname === '/') {
    return <Navigate to="/pet" />
  }

  const logoutClick = async () => {
    // const response = await logout();
    // if (response && response.status == 200) {
    //   removeAuthStore()
    // } else {
    //   setMessage(response.error_message);
    // }
  };

  const items = [
    // {
    //   label: "Profile",
    //   icon: "pi pi-user",
      // url: "/user/" + id,
    // },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => logoutClick(),
    },
  ];
  // const { layoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);

  return (
    <>
      <div className="layout-wrapper layout-static">
        <AppTopbar />
        <div className="layout-sidebar">
            <AppSidebar />
        </div>
        <div className="layout-main-container">
            <div className="layout-main">
              <Outlet />
              
            </div>
            {/* <AppFooter /> */}
        </div>
      </div>
    </>
  );
}
export { MasterLayout };
