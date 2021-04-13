import React from "react";
import "./Toolbar.css";
import Logo from "../../LogoFolder/Logo";
import NavigationItems from "../NavigationItemsFolder/NavigationItems";
import DrawerToggle from "../SidedrawerFolder/DrawerToggleFolder/DrawerToggle";

const toolbar = (props) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
