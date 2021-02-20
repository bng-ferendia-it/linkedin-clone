import React from "react";
import "./Header.css";
import "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Sms from "@material-ui/icons/Sms";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import HeaderOption from "./HeaderOption";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="LinkedIn Clone"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={Sms} title="Messages" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;
