import React, { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      // SAVE TOKEN
      localStorage.setItem("token", res.data.token);

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-[400px]"
      >

        <h2 className="text-2xl font-bold mb-6">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;