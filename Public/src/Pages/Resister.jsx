import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Resister = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleValidation = () => {
    const { password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error("Password and Confirm password should be same", {
        position: "bottom",
        autoClose: 800,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();
    console.log(event);
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <FormContainer>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <img src={logo} alt="" />
          <h1>Snappy</h1>
        </div>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="username"
          placeholder="UserName"
        />
        <input
          type="email"
          onChange={(e) => handleChange(e)}
          name="emil"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          onChange={(e) => handleChange(e)}
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button type="submit">Create User</button>
        <span>
          already have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
export default Resister;
