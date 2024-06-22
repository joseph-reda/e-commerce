import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Announce from "../components/Announce";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/");
    } else {
      alert("Please fill in both username and password.");
    }
  };

  return (
    <div>
      <Announce />
      <div className="flex items-center justify-center h-[100vh]">
        <form
          className="flex flex-col gap-5 border-2 rounded p-10 lg:w-[40%]"
          onSubmit={handleLogin}
        >
          <h2 className="text-center text-[30px] -mt-5">Login</h2>
          <input
            className="p-3 outline-none border-2 rounded text-[20px]"
            type="text"
            placeholder="your username"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="p-3 outline-none border-2 rounded text-[20px]"
            type="password"
            placeholder="your password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
