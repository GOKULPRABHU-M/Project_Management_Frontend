import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { AppContext } from "../context/AppContext";
import "../styles/header.css";

const Header = () => {
  const { user, logout } = useContext(AppContext);
  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <Typography variant="h6">Project Manager</Typography>
        {user && (
          <div className="user-info">
            <Typography>{user.name}</Typography>
            <Avatar sx={{ bgcolor: "#ff4081" }}>{user.name[0]}</Avatar>
            <Button className="logout-btn" onClick={logout}>Logout</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
