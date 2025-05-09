import Button from "@components/button/button";

export default function BookCall() {
  return (
    <section className="section bg-main-shade mb-32">
      <div className="flex flex-col gap-3 items-center py-14">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white font-poppins max-w-[950px]">
          Ready to Discuss Your Project? or Let&apos;s Discuss Your Project
        </h2>
        <p className="text-center text-light leading-7 mb-4 text-lg max-w-[900px]">
          We&apos;re excited to help you achieve your goals and transform them
          into a top-notch digital solution. Claim your free consultation now!
        </p>
        <Button
          text="Book a Call"
          styles="bg-transparent text-black mb-5"
          href={"https://calendly.com/malikhaziq153/30min"}
        />
        <p className="text-light text-center">
          Or, drop your details in the
          <a href="#contact" className="text-[#ffc16b] font-semibold">
            &nbsp;form&nbsp;
          </a>
          below to share your requirements.
        </p>
      </div>
    </section>
  );
}
