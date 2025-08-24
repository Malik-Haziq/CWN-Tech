import logo1 from "../../assets/images/Awards/logo1.webp";
import logo2 from "../../assets/images/Awards/logo2.webp";
import logo3 from "../../assets/images/Awards/logo3.webp";
import logo4 from "../../assets/images/Awards/logo4.webp";
import logo5 from "../../assets/images/Awards/logo5.webp";

export default function Awards() {
  return (
    <>
      <section className="section mb-32">
        <h2 className="h2">Awards & recognitions</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <img src={logo1} alt="logo1" className="h-24 sm:h-32 object-contain" />
          <img src={logo2} alt="logo2" className="h-24 sm:h-32 object-contain" />
          <img src={logo3} alt="logo3" className="h-24 sm:h-32 object-contain" />
          <img src={logo4} alt="logo4" className="h-24 sm:h-32 object-contain" />
          <img src={logo5} alt="logo5" className="h-24 sm:h-32 object-contain" />
        </div>
      </section>
    </>
  );
}
