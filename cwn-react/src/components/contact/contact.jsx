/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";

export default function Contact() {
  const inputData = {
    name: "",
    email: "",
    phone_no: "",
    contact_message: "",
    terms_and_conditions: false
  };

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState(inputData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      validationErrors.email = "Work email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      validationErrors.email = "Invalid email";
    }
    if (!formData.contact_message.trim()) validationErrors.contact_message = "Message is required";
    if (!formData.terms_and_conditions) validationErrors.terms_and_conditions = "You must agree to the terms";

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    fetch("https://codewithnaqvi.com/send_email.php", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(() => {
        setShowPopup(true);
        setFormData(inputData);

        // Auto-close popup after 5 seconds
        setTimeout(() => setShowPopup(false), 5000);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  return (
    <>
      <Whatsapp />

      {/* Popup Modal */}
      {showPopup && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-main max-w-lg w-full z-50 text-center animate-pop">
              <p className="text-main text-lg font-semibold flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.03-2.28a.75.75 0 0 0-1.06-1.06L11 13.88l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l4.75-4.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Thank you for reaching out. Our team will review your message and contact you shortly.</span>
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 bg-main text-white px-4 py-2 rounded hover:bg-main-tint duration-300"
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 animate-fade"
            onClick={() => setShowPopup(false)}
          />
        </>
      )}

      {/* Contact Form Section */}
      <section className="section bg-main-mint" id="contact">
        <div className="py-16">
          <h2 className="h2 mb-8">Let&apos;s Connect!</h2>
          <p className="text-para mb-8">
            Send us a message, and we&apos;ll promptly discuss your project with you.
          </p>
          <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <form
              className="flex flex-col gap-8 basis-3/4"
              name="contact"
              onSubmit={handleSubmit}
              method="POST"
            >
              <div>
                <textarea
                  name="contact_message"
                  cols="30"
                  rows="4"
                  placeholder="How we can help you?"
                  className={`text-sub-para resize-none w-full p-4 rounded-lg border ${errors.contact_message ? 'border-red-500' : 'border-gray-200'}`}
                  value={formData.contact_message}
                  onChange={handleChange}
                ></textarea>
                {errors.contact_message && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact_message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <Input
                  name="name"
                  type="text"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Work Email*"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <Input
                  name="phone_no"
                  type="tel"
                  placeholder="Work Phone"
                  value={formData.phone_no}
                  onChange={handleChange}
                />
                <div className="flex flex-col w-full">
                  <label className="text-sub-para text-sm flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="terms_and_conditions"
                      onChange={handleChange}
                      checked={formData.terms_and_conditions}
                      className="w-4 h-4"
                    />
                    <span>
                      I agree with&nbsp;
                      <Link
                        to="/privacy-policy"
                        className="text-main hover:text-sub-para duration-500"
                      >
                        terms & conditions
                      </Link>
                    </span>
                  </label>
                  {errors.terms_and_conditions && (
                    <p className="text-red-500 text-sm mt-1">{errors.terms_and_conditions}</p>
                  )}
                </div>
              </div>

              <button className="cursor-pointer bg-main px-7 py-3 mt-2 uppercase font-semibold text-white rounded-lg duration-500 hover:bg-main-tint focus:bg-main-shade w-fit">
                Get in touch
              </button>
            </form>

            <div className="basis-auto">
              <h3 className="text-sub-heading font-medium text-3xl mb-6">
                What’s next?
              </h3>
              <div className="flex flex-col gap-6 text-lg lg:text-xl text-sub-para">
                {[
                  "We start by signing an NDA to ensure your ideas are protected.",
                  "Then, our team will analyze your requirements.",
                  "You get a detailed project outline.",
                  "We bring your project to life, so you can focus on growing your business.",
                ].map((step, index) => (
                  <p key={index}>{step}</p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

function Input({ name, type, placeholder, value, onChange, error }) {
  return (
    <div className="w-full">
      <input
        name={name}
        type={type}
        className={`w-full p-4 rounded-lg text-sub-para border ${error ? 'border-red-500' : 'border-gray-200'}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
