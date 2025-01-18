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
        <div className="flex justify-between flex-wrap">
          <img src={logo1} alt="logo1" className="max-h-44" />
          <img src={logo2} alt="logo2" className="max-h-44" />
          <img src={logo3} alt="logo3" className="max-h-44" />
          <img src={logo4} alt="logo4" className="max-h-44" />
          <img src={logo5} alt="logo5" className="max-h-44" />
        </div>
      </section>
    </>
  );
}
