import React, { useRef, useState } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import axios from "axios";
import { useAuthStore } from "@stores/authStore";

function MasterLayout() {
  const [message, setMessage] = useState();
  const menu = useRef(null);
  const {removeAuthStore, id, token, name} = useAuthStore((state) => state)
  if (!token) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }
  const location = useLocation()
  if (location.pathname === '/')  return <Navigate to="/article" />

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
  return (
    <>
      <div className="bg-white px-32 pt-5 pb-10">
        {message && (
          <div className="text-rose-500 text-xm bg-gray-100 border-2 border-solid border-rose-500 rounded-md mb-8 px-3 py-2">
            {message}
          </div>
        )}
        <div className="h-16 px-5 mb-10 bg-gray-100 flex justify-between items-center rounded-md">
          <Link to={"/article"}>
            <div className="text-4xl font-bold text-gray-500">Wiki</div>
          </Link>
          <div className="flex items-center">
            <Link to={'user/'+id}><div className="text-gray-500 capitalize ">{name}</div></Link> 
            <Menu model={items} popup ref={menu} />
            <button
              onClick={(e) => menu.current.toggle(e)}
              className="ml-5 bg-none rounded-full border-gray-500 border-2 border-solid py-1 px-2"
            >
              <i className="pi pi-user" style={{ fontSize: "1rem" }}></i>
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
export { MasterLayout };
