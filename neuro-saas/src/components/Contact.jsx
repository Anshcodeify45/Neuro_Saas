import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - INFO */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Get in touch
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Have questions about NeuroSaaS? Need support or want to discuss a project?
            We’re here to help you build and scale faster.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-600">

            <p>
              📧 Email: support@neurosaas.com
            </p>

            <p>
              📍 Location: Remote / Global
            </p>

            <p>
              ⏱ Response time: Within 24 hours
            </p>

          </div>

          {/* Optional highlight box */}
          <div className="mt-10 p-5 bg-white border rounded-xl shadow-sm">
            <p className="text-sm text-gray-600">
              “We help startups and developers build scalable SaaS products faster.”
            </p>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white border rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
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