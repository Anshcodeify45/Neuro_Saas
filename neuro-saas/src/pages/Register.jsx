import React, { useState } from "react";
import { registerUser } from "../api/authApi";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await registerUser(form);

      alert("Registered Successfully");

      console.log(res.data);

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT BRAND PANEL */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 flex-col justify-between">

        <div>
          <h1 className="text-3xl font-bold">NeuroSaaS</h1>
          <p className="mt-4 text-blue-100">
            Join a modern SaaS platform built for developers and businesses to
            deploy, monitor, and scale applications efficiently.
          </p>
        </div>

        <div className="space-y-3 text-sm text-blue-100">
          <p>✔ Instant Setup</p>
          <p>✔ Secure Authentication</p>
          <p>✔ Real-time Analytics</p>
        </div>

      </div>

      {/* RIGHT FORM SIDE */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6">

        <div className="w-full max-w-md">

          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Create account
            </h2>
            <p className="text-gray-500 mt-2">
              Start building with NeuroSaaS in minutes
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>

            </form>

            {/* LOGIN LINK */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign in
              </Link>
            </div>

          </div>

          {/* FOOTER NOTE */}
          <p className="text-center text-xs text-gray-400 mt-6">
            By creating an account, you agree to our Terms & Privacy Policy
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;