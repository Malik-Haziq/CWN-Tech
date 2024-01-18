import Header from "@components/header/Header";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import ServicesSection from "@components/services/Services";

import services from "@images/solutions/solution.svg";
import innovation from "@images/solutions/innovation.svg";

export function Solutions() {
  return (
    <main>
      {/* ///////////////////////   Header */}
      <Header
        heading="Startup Software Development"
        text="Attain your objectives with customized software development tailored for startups. A robust and scalable solution serves as the optimal approach to meet your business needs. We offer professional consultations and expert guidance across all stages of the software development lifecycle."
        buttonText="Contact Us"
        buttonHref="#contact"
        img={services}
        imgAlt="solution image"
      />

      {/* //////////////////   */}
      <section className="section mb-32 md:mt-16">
        <div className="flex flex-col items-center md:flex-row gap-5 lg:gap-20 bg-main-mint px-5 xl:px-10 py-8 sm:py-10 lg:px-16 rounded-3xl mb-16">
          <img
            src={innovation}
            alt="Problem solving"
            className=" w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset basis-2/6 lg:basis-2/5"
          />
          <div className="basis-4/6 lg:basis-3/5 ">
            <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-6">
            Discovery phase
            </h3>
            <p className="text-lg sm:text-xl leading-7 text-para mb-4">
              Reduce risks and streamline costs during the discovery phase of your development.
            </p>
            <ul className="mb-10 list-disc list-inside text-sub-para leading-8  text-md lg:text-lg">
              <li>We ensure the future product will be a right fit for the market</li>
              <li>We define the goals and create specifications for solution</li>
              <li>We draft architecture design</li>
              <li>We assess risks and mitigate the development plan</li>
            </ul>
            <a
              href="#"
              className="text-tertiary-shade hover:text-tertiary duration-200 border-b-[1px] text-xl "
            >
              Book a call
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col items-center md:flex-row gap-5 lg:gap-20 bg-main-mint px-5 xl:px-10 py-8 sm:py-10 lg:px-16 rounded-3xl mb-16">
          
          <div className="basis-4/6 lg:basis-3/5 ">
            <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-6">
            Discovery phase
            </h3>
            <p className="text-lg sm:text-xl leading-7 text-para mb-4">
              Reduce risks and streamline costs during the discovery phase of your development.
            </p>
            <ul className="mb-10 list-disc list-inside text-sub-para leading-8  text-md lg:text-lg">
              <li>We ensure the future product will be a right fit for the market</li>
              <li>We define the goals and create specifications for solution</li>
              <li>We draft architecture design</li>
              <li>We assess risks and mitigate the development plan</li>
            </ul>
            <a
              href="#"
              className="text-tertiary-shade hover:text-tertiary duration-200 border-b-[1px] text-xl "
            >
              Book a call
            </a>
          </div>
          <img
            src={innovation}
            alt="Problem solving"
            className=" w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset basis-2/6 lg:basis-2/5"
          />
        </div> */}
      </section>
    </main>
  );
}
