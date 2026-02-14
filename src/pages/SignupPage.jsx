import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup success! Use login now.");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt:10,p:4,boxShadow:3,borderRadius:2, bgcolor:"white" }}>
        <Typography variant="h4" gutterBottom>Signup</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" margin="normal" value={name} onChange={e=>setName(e.target.value)}/>
          <TextField fullWidth label="Email" margin="normal" value={email} onChange={e=>setEmail(e.target.value)}/>
          <TextField fullWidth type="password" label="Password" margin="normal" value={password} onChange={e=>setPassword(e.target.value)}/>
          <Button type="submit" variant="contained" fullWidth sx={{ mt:2 }}>Signup</Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignupPage;
