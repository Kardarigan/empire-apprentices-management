import React, { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../services/supabase";
import { setEmitFlags } from "typescript";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert("Whoops, wrong cred eh?🦌");
    else navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-9 bg-white rounded shadow">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Email..."
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Password..."
        />
        <button onClick={handleLogin} className="bg-indigo-500 text-white p-2">
          Login 🍷
        </button>
      </div>
    </div>
  );
};

export default Login;
