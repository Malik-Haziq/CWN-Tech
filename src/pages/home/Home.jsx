import homeBg from "@images/bg.webp";
import Button from "@components/button/button";

export function Home() {
  return (
    <header
      style={{
        background: `url(${homeBg}), linear-gradient(10deg, rgba(59, 130, 246, 0.00) 12.42%, rgba(62, 183, 187, 0.10) 63.32%)`,
      }}
      className="section"
    >
      <div className=" py-24 lg:py-40">
        <span className="bg-main text-xs sm:text-sm lg:text-base rounded-lg py-1 px-3 text-white mb-2 inline-block">SOFTWARE PRODUCT DEVELOPMENT COMPANY</span>
        <h1 className="font-bold text-4xl lg:text-8xl md:text-7xl sm:text-5xl mb-4 md:w-10/12">Your <span className="text-main">Product.</span> Your <span className="text-main">Idea.</span> Our <span className="text-main">Innovation</span> and Engineering.</h1>
        <p className="text-sub-para text-lg sm:text-xl lg:text-2xl sm:w-10/12 lg:w-1/2 mb-10">Elevate your vision using our extensive range of software development and expansion solutions.</p>
        <Button text={"Let's discuss your project"} styles="px-4 sm:px-6 lg:px-10 py-4"/>
      </div>
    </header>
  );
}
