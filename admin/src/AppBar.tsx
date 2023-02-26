// in src/MyAppBar.js
import * as React from "react";

import { AppBar, LoadingIndicator, SidebarToggleButton, UserMenu } from "react-admin";

import Typography from "@mui/material/Typography";

const MyAppBar = (props: any) => {
  console.log(props);
  const { children, userMenu = <UserMenu />, } = props;

  return (
    <header className="main-head">
      <div className="icons" style={{ display: "flex", alignItems: "center" }}>
        <SidebarToggleButton className={""} />
        {/* Admin DashBoard */}
        {React.Children.count(children) === 0 ? (
          <Typography
            variant="h6"
            color="inherit"
            className={""}
            id="react-admin-title"
          />
        ) : (
          children
        )}
      </div>
      <div className="logo">MY KHOJ</div>
      <div className="search" style={{ display: 'flex'}}>
        <LoadingIndicator />
        {typeof userMenu === "boolean" ? (
          userMenu === true ? (
            <UserMenu />
          ) : null
        ) : (
          userMenu
        )}
      </div>
    </header>
  );
};

export default MyAppBar;
