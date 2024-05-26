import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUserInput = (e) => {
    setUsername(e.target.value);
  };

  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      

    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={handleUserInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleUserPassword}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
