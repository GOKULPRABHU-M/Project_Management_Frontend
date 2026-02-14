import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

const LoginPage = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(login(email,password)) navigate("/");
    else alert("Invalid credentials");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt:10,p:4,boxShadow:3,borderRadius:2, bgcolor:"white" }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" margin="normal" value={email} onChange={e=>setEmail(e.target.value)}/>
          <TextField fullWidth type="password" label="Password" margin="normal" value={password} onChange={e=>setPassword(e.target.value)}/>
          <Button type="submit" variant="contained" fullWidth sx={{ mt:2 }}>Login</Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
