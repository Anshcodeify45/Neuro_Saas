import React, { useState } from "react";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";

import { loginUser } from "../api/authApi";

import {
  useNavigate,
  Link,
} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res =
        await loginUser(form);

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");
    } catch (err) {
      alert(
        err.response?.data
          ?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#f5f7fb]
        flex
        overflow-hidden
      "
    >

      {/* ================= LEFT PANEL ================= */}

      <div
        className="
          hidden
          lg:flex
          w-1/2
          relative
          overflow-hidden
          bg-gradient-to-br
          from-blue-700
          via-indigo-700
          to-slate-900
          text-white
          p-12
          flex-col
          justify-between
        "
      >

        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            top-[-120px]
            right-[-120px]
            w-[300px]
            h-[300px]
            rounded-full
            bg-blue-400/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-100px]
            left-[-80px]
            w-[250px]
            h-[250px]
            rounded-full
            bg-indigo-500/20
            blur-3xl
          "
        />

        {/* TOP */}
        <div className="relative z-10">

          <div className="flex items-center gap-3">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
                border
                border-white/10
              "
            >

              <BarChart3 size={24} />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                NeuroDash
              </h1>

              <p className="text-blue-100 text-sm mt-1">
                AI Powered Analytics
              </p>

            </div>

          </div>

          <div className="mt-16 max-w-lg">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                text-sm
                backdrop-blur-xl
              "
            >

              <Sparkles size={15} />

              Next Generation Dashboard

            </div>

            <h2
              className="
                text-5xl
                font-bold
                leading-tight
                mt-6
              "
            >
              Manage your business with smarter analytics
            </h2>

            <p
              className="
                mt-6
                text-blue-100
                text-lg
                leading-relaxed
              "
            >
              Track performance,
              monitor growth,
              manage users,
              and visualize data
              in real-time with
              enterprise-level
              dashboard experience.
            </p>

          </div>

        </div>

        {/* FLOATING CARDS */}
        <div
          className="
            relative
            z-10
            grid
            grid-cols-2
            gap-5
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              p-5
              rounded-3xl
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/10
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-blue-500/20
                  flex
                  items-center
                  justify-center
                "
              >

                <Activity size={22} />

              </div>

              <div>

                <p className="text-sm text-blue-100">
                  Active Users
                </p>

                <h3 className="text-2xl font-bold">
                  24.5K
                </h3>

              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              p-5
              rounded-3xl
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/10
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-emerald-500/20
                  flex
                  items-center
                  justify-center
                "
              >

                <ShieldCheck size={22} />

              </div>

              <div>

                <p className="text-sm text-blue-100">
                  Security
                </p>

                <h3 className="text-2xl font-bold">
                  99.9%
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* ================= RIGHT PANEL ================= */}

      <div
        className="
          flex-1
          flex
          items-center
          justify-center
          px-6
          py-10
          relative
        "
      >

        {/* BG */}
        <div
          className="
            absolute
            top-0
            right-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-100
            blur-3xl
            opacity-40
          "
        />

        {/* CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            relative
            z-10
            w-full
            max-w-md
          "
        >

          {/* HEADER */}
          <div className="mb-8">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-blue-50
                text-blue-600
                text-sm
                font-medium
                border
                border-blue-100
              "
            >

              <ShieldCheck size={15} />

              Secure Login

            </div>

            <h2
              className="
                text-4xl
                font-bold
                text-gray-900
                mt-5
              "
            >
              Welcome back
            </h2>

            <p
              className="
                text-gray-500
                mt-3
                text-base
              "
            >
              Sign in to continue
              accessing your
              analytics dashboard.
            </p>

          </div>

          {/* FORM CARD */}
          <div
            className="
              bg-white/90
              backdrop-blur-2xl
              border
              border-white
              shadow-2xl
              rounded-[32px]
              p-8
            "
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* EMAIL */}
              <div>

                <label
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  Email Address
                </label>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3.5
                    rounded-2xl
                    border
                    border-gray-200
                    focus-within:ring-2
                    focus-within:ring-blue-500/30
                    focus-within:border-blue-500
                    transition-all
                  "
                >

                  <Mail
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    onChange={
                      handleChange
                    }
                    className="
                      flex-1
                      bg-transparent
                      outline-none
                      text-gray-800
                      placeholder:text-gray-400
                    "
                    required
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  Password
                </label>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3.5
                    rounded-2xl
                    border
                    border-gray-200
                    focus-within:ring-2
                    focus-within:ring-blue-500/30
                    focus-within:border-blue-500
                    transition-all
                  "
                >

                  <Lock
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="••••••••"
                    onChange={
                      handleChange
                    }
                    className="
                      flex-1
                      bg-transparent
                      outline-none
                      text-gray-800
                      placeholder:text-gray-400
                    "
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="
                      text-gray-400
                      hover:text-gray-600
                    "
                  >

                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}

                  </button>

                </div>

              </div>

              {/* REMEMBER */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                "
              >

                <label
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-600
                  "
                >

                  <input
                    type="checkbox"
                    className="
                      rounded
                      border-gray-300
                    "
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="
                    text-blue-600
                    font-medium
                    hover:underline
                  "
                >
                  Forgot password?
                </button>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full
                  py-4
                  rounded-2xl
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                  ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.01]"
                  }
                `}
              >

                {loading ? (
                  <>

                    <svg
                      className="
                        animate-spin
                        h-5
                        w-5
                        text-white
                      "
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
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />

                    </svg>

                    Signing in...

                  </>
                ) : (
                  <>

                    Sign in

                    <ArrowRight size={18} />

                  </>
                )}

              </button>

            </form>

            {/* FOOTER */}
            <div
              className="
                mt-7
                text-center
                text-sm
                text-gray-500
              "
            >

              Don’t have an account?{" "}

              <Link
                to="/register"
                className="
                  text-blue-600
                  font-semibold
                  hover:underline
                "
              >
                Create account
              </Link>

            </div>

          </div>

          {/* FOOTER NOTE */}
          <p
            className="
              text-center
              text-xs
              text-gray-400
              mt-6
            "
          >
            Protected with enterprise-grade security
          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default Login;