import React, { useState } from "react";

import {
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Rocket,
  CheckCircle2,
} from "lucide-react";

import { registerUser } from "../api/authApi";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  // HANDLE CHANGE


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE SUBMIT


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res =
        await registerUser(form);

      console.log(res.data);

      alert(
        "Account created successfully 🎉"
      );

      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data
          ?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        bg-gray-50
        dark:bg-[#060816]
        overflow-hidden
      "
    >

      {/* LEFT SIDE */}


      <div
        className="
          hidden
          lg:flex
          relative
          w-1/2
          overflow-hidden
          bg-gradient-to-br
          from-indigo-600
          via-blue-600
          to-cyan-500
          p-12
          text-white
          flex-col
          justify-between
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            top-0
            left-0
            w-[500px]
            h-[500px]
            bg-white/10
            blur-3xl
            rounded-full
            -translate-x-40
            -translate-y-40
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[400px]
            h-[400px]
            bg-cyan-300/20
            blur-3xl
            rounded-full
            translate-x-32
            translate-y-32
          "
        />

        {/* LOGO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative z-10"
        >

          <div className="flex items-center gap-3">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/20
                backdrop-blur-xl
                flex
                items-center
                justify-center
                border
                border-white/20
              "
            >

              <Sparkles size={28} />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                NeuroSaaS
              </h1>

              <p className="text-sm text-blue-100 mt-1">
                Modern Admin Platform
              </p>

            </div>

          </div>

        </motion.div>

        {/* CENTER CONTENT */}
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
            delay: 0.2,
          }}
          className="
            relative
            z-10
            max-w-lg
          "
        >

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
              border-white/20
              text-sm
              mb-6
              backdrop-blur-xl
            "
          >

            <Rocket size={16} />

            Start Your Journey

          </div>

          <h2
            className="
              text-5xl
              leading-tight
              font-bold
            "
          >
            Build modern apps with a premium dashboard experience.
          </h2>

          <p
            className="
              text-blue-100
              mt-6
              text-lg
              leading-relaxed
            "
          >
            Join thousands of developers &
            businesses using NeuroSaaS
            for analytics, monitoring,
            management, and growth.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-4">

            {[
              "Advanced analytics dashboard",
              "Enterprise-grade security",
              "Realtime data monitoring",
              "Modern scalable architecture",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    w-9
                    h-9
                    rounded-xl
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    border
                    border-white/10
                  "
                >

                  <CheckCircle2
                    size={18}
                  />

                </div>

                <span className="text-white/90">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </motion.div>

        {/* BOTTOM */}
        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
            pt-10
          "
        >

          <div>

            <p className="text-sm text-white/70">
              Trusted by developers worldwide
            </p>

            <h4 className="text-2xl font-bold mt-1">
              50K+ Users
            </h4>

          </div>

          <div
            className="
              px-5
              py-3
              rounded-2xl
              bg-white/10
              border
              border-white/20
              backdrop-blur-xl
              flex
              items-center
              gap-3
            "
          >

            <ShieldCheck size={20} />

            Secure Platform

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
     

      <div
        className="
          flex-1
          flex
          items-center
          justify-center
          p-6
          lg:p-12
          relative
        "
      >

        {/* CARD */}
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
            w-full
            max-w-md
          "
        >

          {/* TOP */}
          <div className="mb-8">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-blue-500/10
                text-blue-600
                text-sm
                font-medium
                mb-5
              "
            >

              <Sparkles size={14} />

              Create Account

            </div>

            <h2
              className="
                text-4xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              Get Started
            </h2>

            <p
              className="
                text-gray-500
                dark:text-gray-400
                mt-3
                text-sm
              "
            >
              Create your account and
              access your premium admin
              dashboard.
            </p>

          </div>

          {/* FORM CARD */}
          <div
            className="
              rounded-3xl
              border
              border-gray-200
              dark:border-white/10
              bg-white
              dark:bg-white/[0.03]
              shadow-xl
              backdrop-blur-2xl
              p-8
            "
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>

                <label
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    mt-2
                    px-4
                    py-3.5
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-gray-50
                    dark:bg-white/[0.03]
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    outline-none
                    focus:ring-4
                    focus:ring-blue-500/20
                    focus:border-blue-500
                    transition-all
                  "
                />

              </div>

              {/* EMAIL */}
              <div>

                <label
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    mt-2
                    px-4
                    py-3.5
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-gray-50
                    dark:bg-white/[0.03]
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    outline-none
                    focus:ring-4
                    focus:ring-blue-500/20
                    focus:border-blue-500
                    transition-all
                  "
                />

              </div>

              {/* PASSWORD */}
              <div>

                <label
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  Password
                </label>

                <div className="relative mt-2">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={
                      handleChange
                    }
                    required
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      text-gray-900
                      dark:text-white
                      placeholder:text-gray-400
                      outline-none
                      focus:ring-4
                      focus:ring-blue-500/20
                      focus:border-blue-500
                      transition-all
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                      hover:text-blue-500
                      transition
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

              {/* TERMS */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                  pt-1
                "
              >

                <input
                  type="checkbox"
                  required
                  className="
                    mt-1
                    rounded
                    border-gray-300
                    text-blue-600
                    focus:ring-blue-500
                  "
                />

                <p
                  className="
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                    leading-relaxed
                  "
                >
                  I agree to the{" "}
                  <span className="text-blue-600 font-medium cursor-pointer">
                    Terms
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 font-medium cursor-pointer">
                    Privacy Policy
                  </span>
                </p>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full
                  mt-2
                  py-3.5
                  rounded-2xl
                  font-semibold
                  text-white
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-2
                  ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : `
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        hover:scale-[1.01]
                        hover:shadow-xl
                        hover:shadow-blue-500/25
                      `
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
                      "
                      viewBox="0 0 24 24"
                      fill="none"
                    >

                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-80"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />

                    </svg>

                    Creating account...

                  </>
                ) : (
                  <>
                    Create Account

                    <ArrowRight
                      size={18}
                    />
                  </>
                )}

              </button>

            </form>

            {/* LOGIN */}
            <div
              className="
                mt-7
                text-center
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >

              Already have an account?{" "}

              <Link
                to="/login"
                className="
                  text-blue-600
                  font-semibold
                  hover:underline
                "
              >
                Sign in
              </Link>

            </div>

          </div>

          {/* FOOTER */}
          <p
            className="
              text-center
              text-xs
              text-gray-400
              mt-6
            "
          >
            © 2026 NeuroSaaS.
            Enterprise-grade platform.
          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default Register;