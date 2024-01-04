export default function Contact(){
  return <section className="section bg-main-mint" id="contact">
  <div className="py-16">
    <h2 className="h2 mb-8">Let's Connect!</h2>
    <p className="text-para mb-8">
      Send us a message, and we'll promptly discuss your project with you.
    </p>
    <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
      <form className="flex flex-col gap-8 basis-3/4">
        <textarea
          cols="30"
          rows="4"
          placeholder="How we can help you?"
          className="text-sub-para resize-none p-4 rounded-lg focus:outline-none max-w-[592px]"
        ></textarea>
        <div className="flex flex-col sm:flex-row gap-8">
          <Input type={"text"} placeholder={"Full Name*"} />
          <Input type={"email"} placeholder={"Work Email*"} />
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <Input type={"tel"} placeholder={"Work Phone"} />
          <label className="text-sub-para text-sm flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>
              I agree with
              <a
                href="#"
                className="text-main hover:text-sub-para duration-500"
              >
                terms & conditions
              </a>
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
}

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      className="border-none focus:outline-none p-4 rounded-lg text-sub-para"
      placeholder={placeholder}
    />
  );
}