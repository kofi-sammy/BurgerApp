import React from "react";

import styles from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const Layout = (props) => {
    return(
    <React.Fragment>
        <div>
            <Toolbar/>
            <SideDrawer/>
            Backdrop
        </div>
        
            <main className= {styles.Content} >
                {props.children}
            </main>
    </React.Fragment>
)}

export default Layout;