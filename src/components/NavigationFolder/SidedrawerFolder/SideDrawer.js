import React from "react";
import Logo from "../../LogoFolder/Logo";
import NavigationItems from "../NavigationItemsFolder/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UIFolder/BackdropFolder/Backdrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = (props) => {
  let classToggle = "SideDrawer Close";
  if (props.opened) {
    classToggle = "SideDrawer Open";
  }

  return (
    <Aux>
      <Backdrop show={props.opened} hide={props.closed} />
      <div className={classToggle}>
        <Logo margin-buttom="32px" height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
