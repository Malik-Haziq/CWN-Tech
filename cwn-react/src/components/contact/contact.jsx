import { useState } from "react";
import { Link } from "react-router-dom";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";

export default function Contact() {
  const inputData = {
    name: "",
    email: "",
    phone_no: "",
    contact_message: "",
  };

  const [formData, setFormData] = useState(inputData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, "hello");
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
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      alert(result.message);
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
      alert("Something went wrong!");
    });
  };
  return (
    <>
    <Whatsapp />
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
                name={"contact_message"}
                cols="30"
                rows="4"
                placeholder="How we can help you?"
                className="text-sub-para resize-none w-full p-4 rounded-lg"
                value={formData.contact_message}
                onChange={handleChange}
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-8">
                <Input
                  name={"name"}
                  type={"text"}
                  placeholder={"Full Name*"}
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  name={"email"}
                  type={"email"}
                  placeholder={"Work Email*"}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                <Input
                  name={"phone_no"}
                  type={"tel"}
                  placeholder={"Work Phone"}
                  value={formData.phone_no}
                  onChange={handleChange}
                  className="max-w-[592px]"
                />
                <label className="text-sub-para text-sm flex items-center gap-2 w-full">
                  <input type="checkbox" className="w-4 h-4" />
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
              <ol className=" flex flex-col gap-6 text-lg lg:text-xl text-sub-para">
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    1
                  </div>
                  <p>
                    We start by signing an NDA to ensure your ideas are
                    protected.
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    2
                  </div>
                  <p>Then, our team will analyze your requirements.</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    3
                  </div>
                  <p>You get a detailed project outline.</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    4
                  </div>
                  <p>
                    We bring your project to life, so you can focus on growing
                    your business.
                  </p>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

function Input({ name, type, placeholder, onChange }) {
  return (
    <input
      name={name}
      type={type}
      className="border-none w-full p-4 rounded-lg text-sub-para"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
