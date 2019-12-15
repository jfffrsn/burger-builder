import React from "react";
import Auxillary from "../../hoc/Auxillary";

import classes from '../Layout/Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Auxillary>
    <Toolbar />
    <div>
        Toolbar Sidedrawer Backdrop</div>
    <main className={classes.Content}>
        {props.children}
        </main>
  </Auxillary>
);

export default layout;
