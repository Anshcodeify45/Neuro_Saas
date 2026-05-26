import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent successfully!");
  };

  return (
    <section
      className="
        min-h-screen
        bg-gray-50
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        lg:px-8
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          max-w-6xl
          w-full
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-12
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-col
            justify-center
            order-2
            lg:order-1
          "
        >
          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
              leading-tight
            "
          >
            Get in touch
          </h1>

          <p
            className="
              text-gray-600
              mt-4
              leading-relaxed
              text-sm
              sm:text-base
            "
          >
            Have questions about NeuroSaaS?
            Need support or want to discuss
            a project? We’re here to help
            you build and scale faster.
          </p>

          {/* CONTACT INFO */}
          <div
            className="
              mt-8
              space-y-4
              text-sm
              sm:text-base
              text-gray-600
            "
          >
            <p className="break-all">
              📧 Email: support@neurosaas.com
            </p>

            <p>
              📍 Location: Remote / Global
            </p>

            <p>
              ⏱ Response time: Within 24
              hours
            </p>
          </div>

          {/* HIGHLIGHT BOX */}
          <div
            className="
              mt-8
              sm:mt-10
              p-4
              sm:p-5
              bg-white
              border
              rounded-2xl
              shadow-sm
            "
          >
            <p
              className="
                text-sm
                sm:text-base
                text-gray-600
                leading-relaxed
              "
            >
              “We help startups and
              developers build scalable
              SaaS products faster.”
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div
          className="
            bg-white
            border
            rounded-2xl
            sm:rounded-3xl
            shadow-sm
            p-5
            sm:p-8
            order-1
            lg:order-2
          "
        >
          <h2
            className="
              text-2xl
              sm:text-3xl
              font-semibold
              text-gray-900
              mb-6
            "
          >
            Send a message
          </h2>

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
                  text-gray-600
                "
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  border
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  text-sm
                  sm:text-base
                "
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                className="
                  text-sm
                  font-medium
                  text-gray-600
                "
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  border
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  text-sm
                  sm:text-base
                "
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                className="
                  text-sm
                  font-medium
                  text-gray-600
                "
              >
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  border
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  text-sm
                  sm:text-base
                  resize-none
                "
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                text-white
                py-3
                sm:py-3.5
                rounded-xl
                font-medium
                hover:bg-blue-700
                transition
                text-sm
                sm:text-base
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;