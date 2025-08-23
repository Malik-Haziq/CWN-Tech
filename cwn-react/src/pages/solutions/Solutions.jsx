import Header from "@components/header/Header";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import ServicesSection from "@components/services/Services";
import BookCallBtn from "@components/bookCallBtn/BookCallBtn";

import services from "@images/solutions/solution.svg";
import innovation from "@images/solutions/innovation.svg";
import development from "@images/solutions/development.svg";
import developmentStrategy from "@images/solutions/development-strategy.svg";
import Seo from "@components/seo/Seo";

export function Solutions() {
  return (
    <main>
      <Seo
        title="Software Solutions | CWN"
        description="Explore CWN's scalable software solutions and dedicated development support."
        keywords="solutions, software development, CWN"
      />
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
        <DiscoveryPhase />
        <MVPDevelopment />
        <ProductStrategy />
        <OurServices />
        <section>
          <div className="p-9 rounded-xl bg-main-mint flex-1">
            <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
              Attracting strategic investment
            </h3>
            <p className="text-lg sm:text-xl leading-7 text-para mb-10">
              Based on the outcomes of the planning phase, if your solution
              requires additional funding, we will provide consultation on the
              optimal strategies to secure it.
            </p>
            <BookCallBtn/>
          </div>
        </section>
      </section>

      {/* ////////////////  Services */}
      <ServicesSection/>
      {/* ///////////   Book a call */}
      <BookCall/>

      {/* ////////////  Who we are */}
      <WhoAeAre/>

      {/* /////////// Contact */}
      <Contact/>

      {/* /////////////  Footer */}
      <Footer/>
    </main>
  );
}

function DiscoveryPhase() {
  return (
    <section className="flex flex-col items-center md:flex-row gap-5 lg:gap-20 bg-main-mint px-5 xl:px-10 py-8 sm:py-10 lg:px-16 rounded-3xl mb-16">
      <img
        src={innovation}
        alt="innovation idea"
        className=" w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset basis-2/6 lg:basis-2/5"
      />
      <div className="basis-4/6 lg:basis-3/5 ">
        <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-6">
          Discovery phase
        </h3>
        <p className="text-lg sm:text-xl leading-7 text-para mb-4">
          Reduce risks and streamline costs during the discovery phase of your
          development.
        </p>
        <ul className="mb-10 list-disc list-inside text-sub-para flex flex-col gap-1  text-md lg:text-lg">
          <li>
            We ensure the future product will be a right fit for the market
          </li>
          <li>We define the goals and create specifications for solution</li>
          <li>We draft architecture design</li>
          <li>We assess risks and mitigate the development plan</li>
        </ul>
        <BookCallBtn />
      </div>
    </section>
  );
}

function MVPDevelopment() {
  return (
    <section className="flex flex-col items-center md:flex-row gap-5 lg:gap-20 bg-light-gray px-5 xl:px-10 py-8 sm:py-10 lg:px-16 rounded-3xl mb-16">
      <div className="basis-4/6 lg:basis-3/5 ">
        <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-6">
          MVP development
        </h3>
        <p className="text-lg sm:text-xl leading-7 text-para mb-4">
          CWN Technologies specializes in creating and launching basic versions
          of products. Once your app is live, we continuously improve and refine
          it through multiple rounds using agile methods.
        </p>
        <ul className="mb-10 list-disc list-inside text-sub-para flex flex-col gap-1  text-md lg:text-lg">
          <li>Create a product prototype</li>
          <li>Build an MVP</li>
          <li>Startup product development</li>
          <li>Startup rescue mission</li>
        </ul>
        <BookCallBtn />
      </div>
      <img
        src={development}
        alt="product development"
        className=" w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset basis-2/6 lg:basis-2/5"
      />
    </section>
  );
}

function ProductStrategy() {
  return (
    <section className="flex flex-col items-center md:flex-row gap-5 lg:gap-20 bg-main-mint px-5 xl:px-10 py-8 sm:py-10 lg:px-16 rounded-3xl mb-16">
      <img
        src={developmentStrategy}
        alt="product strategy solving"
        className=" w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset basis-2/6 lg:basis-2/5"
      />
      <div className="basis-4/6 lg:basis-3/5 ">
        <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-6">
          Product Development Strategy
        </h3>
        <p className="text-lg sm:text-xl leading-8 text-para mb-4">
          We've got the strategy. Let our experts turn your ideas into
          innovative, customer-delighting realities with carefully tailored
          development.
        </p>
        <p className="text-md lg:text-lg leading-8 text-para mb-3">
          CWN Technologies can help you with the following:
        </p>
        <ul className="mb-10 list-disc list-inside text-sub-para flex flex-col gap-1 text-md lg:text-lg">
          <li>Vision</li>
          <li>Strategic Plan</li>
          <li>Roadmap</li>
          <li>Product Planning Process</li>
        </ul>
        <BookCallBtn />
      </div>
    </section>
  );
}

function OurServices() {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between gap-10 mb-16">
      <div className="p-9 rounded-xl bg-light-gray flex-1">
        <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
          Product design of your future solution
        </h3>
        <p className="text-lg sm:text-xl leading-7 text-para mb-4">
          CWN Technologies handles the entire spectrum of your startup solution
          or product, encompassing product design from conception to deployment.
        </p>
      </div>
      <div className="p-9 rounded-xl bg-light-gray flex-1">
        <h3 className="text-sub-heading text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
          Consulting services for your startup
        </h3>
        <p className="text-lg sm:text-xl leading-7 text-para mb-4">
          Take advantage of our expert startup consulting services for efficient
          planning, development, and launch of new solutions.
        </p>
      </div>
    </section>
  );
}
