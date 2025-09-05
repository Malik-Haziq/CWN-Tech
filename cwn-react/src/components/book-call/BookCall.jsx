import Button from "@components/button/button";

export default function BookCall() {
  return (
    <section className="section bg-main-shade mb-32">
      <div className="flex flex-col gap-3 items-center py-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-poppins font-semibold tracking-tight leading-tight max-w-[950px]">
          Ready to Kickstart Your Project?
        </h2>
        <p className="text-center text-light leading-8 mb-4 text-lg max-w-[900px]">
          Share your goals and constraints—our team will outline a clear, actionable
          roadmap to a high‑quality digital product. Book a free 30‑minute consultation.
        </p>
        <Button
          text="Book Free Consultation"
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
