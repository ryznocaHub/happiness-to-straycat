import { classNames } from "primereact/utils";
import React from "react";
import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom";

const AppSidebar = () => {
  return (
    <ul className="layout-menu">
      <Link to={'/'}>
        <li className="layout-root-menuitem active-menuitem">
          <div className="layout-menuitem-root-text">Home</div>
        </li>
      </Link>
      <Link to={'/profile'}>
        <li className="layout-root-menuitem active-menuitem">
          <div className="layout-menuitem-root-text">Profile</div>
        </li>
      </Link>
    </ul>
  );
};

export default AppSidebar;
