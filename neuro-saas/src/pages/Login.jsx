import React, { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

      const res = await loginUser(form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE (BRAND PANEL - SaaS STYLE) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 flex-col justify-between">

        <div>
          <h1 className="text-3xl font-bold">NeuroSaaS</h1>
          <p className="mt-4 text-blue-100">
            Build, deploy, and scale modern web applications with real-time insights
            and enterprise-grade infrastructure.
          </p>
        </div>

        <div className="space-y-3 text-sm text-blue-100">
          <p>✔ Secure Authentication</p>
          <p>✔ Real-time Analytics</p>
          <p>✔ Scalable Architecture</p>
        </div>

      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6">

        <div className="w-full max-w-md">

          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Welcome back
            </h2>
            <p className="text-gray-500 mt-2">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

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
                    className={`w-full py-3 rounded-xl font-medium transition flex items-center justify-center gap-2 ${
                      loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>

                        Signing in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>

            </form>

            {/* SIGNUP LINK */}
            <div className="mt-6 text-center text-sm text-gray-600">

              New here?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Create an account
              </Link>

            </div>

          </div>

          {/* FOOTER NOTE */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Protected by enterprise-grade security
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;