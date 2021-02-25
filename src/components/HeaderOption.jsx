import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import {selectUser} from "../features/userSlice"
function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  //render the page navigation options that could be implemented in the header

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={user?.photoUrl} className="headerOption__icon"></Avatar>}
      <h3 className>{title}</h3>
    </div>
  );
}

export default HeaderOption;
