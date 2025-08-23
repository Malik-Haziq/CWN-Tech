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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-300 max-w-sm w-full z-50 text-center animate-pop">
              <p className="text-green-600 text-lg font-semibold flex items-center justify-center gap-2">
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
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
          <h2 className="h2 mb-8">Let's Connect!</h2>
          <p className="text-para mb-8">
            Send us a message, and we'll promptly discuss your project with you.
          </p>
          <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <form
              className="flex flex-col gap-8 basis-3/4"
              name="contact"
              onSubmit={handleSubmit}
              method="POST"
            >
              <textarea
                name="contact_message"
                cols="30"
                rows="4"
                placeholder="How we can help you?"
                className="text-sub-para resize-none w-full p-4 rounded-lg"
                value={formData.contact_message}
                onChange={handleChange}
              ></textarea>

              <div className="flex flex-col sm:flex-row gap-8">
                <Input
                  name="name"
                  type="text"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Work Email*"
                  value={formData.email}
                  onChange={handleChange}
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
                <label className="text-sub-para text-sm flex items-center gap-2 w-full">
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
              </div>

              <button className="cursor-pointer bg-main px-7 py-3 mt-2 uppercase font-semibold text-white rounded-lg duration-500 hover:bg-main-tint focus:bg-main-shade w-fit">
                Get in touch
              </button>
            </form>

            <div className="basis-auto">
              <h3 className="text-sub-heading font-medium text-3xl mb-6">
                What’s next?
              </h3>
              <ol className="flex flex-col gap-6 text-lg lg:text-xl text-sub-para">
                {[
                  "We start by signing an NDA to ensure your ideas are protected.",
                  "Then, our team will analyze your requirements.",
                  "You get a detailed project outline.",
                  "We bring your project to life, so you can focus on growing your business.",
                ].map((step, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

function Input({ name, type, placeholder, value, onChange }) {
  return (
    <input
      name={name}
      type={type}
      className="border-none w-full p-4 rounded-lg text-sub-para"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
