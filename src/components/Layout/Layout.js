import React from "react";
import Auxillary from "../../hoc/Auxillary";

import classes from "../Layout/Layout.module.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";

import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <Auxillary>
    <Toolbar />
    <SideDrawer />
    <div>Toolbar Sidedrawer Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxillary>
);

export default layout;
