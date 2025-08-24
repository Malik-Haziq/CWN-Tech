import Header from "@components/header/Header";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import BookCallBtn from "@components/bookCallBtn/BookCallBtn";
import ServicesSection from "@components/services/Services";

import services from "@images/services/services.svg";
import project from "@images/services/project-manger.svg";
import webDevelopment from "@images/services/web-development.svg";
import Seo from "@components/seo/Seo";

export function Services() {
  return (
    <main>
      <Seo
        title="Software Development Services | CWN"
        description="Discover CWN's web development and project management services tailored to your business."
        keywords="services, software development, CWN"
      />
      {/* /////////////////  Header */}
      <Header
        heading="Services"
        text="We are a software development
              company which covers specific client business needs and manage
              them with the help of the best possible technology solutions."
        buttonText="Contact Us"
        buttonHref="#contact"
        img={services}
        imgAlt="service image"
      />

      {/* ///////////////  Our core Service */}
      <section className="section mb-32 md:mt-16">
        <h2 className="h2">Our core Services</h2>
        <div className="flex flex-col items-center md:flex-row gap-5 lg:gap-20 bg-main-mint px-5 xm:px-10 py-8 sm:py-10 lg:px-16 rounded-3xl mb-16">
          <img loading="lazy"
            src={webDevelopment}
            alt="Web development"
            className=" w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset basis-2/6 lg:basis-2/5 transition-transform duration-500 hover:scale-105"
          />
          <div className="basis-4/6 lg:basis-3/5 ">
            <h3 className="text-sub-heading text-xl xl:text-2xl font-semibold mb-4">
              Web Development
            </h3>
            <p className="text-md sm:text-lg leading-7 text-para mb-16">
              We engineer dynamic and responsive websites that captivate
              audiences across devices. Our expertise encompasses the entire web
              development spectrum, from front-end design to back-end
              functionality.
            </p>
            <BookCallBtn />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row gap-5 lg:gap-20 bg-light-gray px-5 xm:px-10 py-8 sm:py-10 lg:px-16 rounded-3xl ">
          <div className="basis-3/5 ">
            <h3 className="text-sub-heading text-xl xl:text-2xl font-semibold mb-4">
              Project management
            </h3>
            <p className="text-md sm:text-lg leading-7 text-para mb-16">
              Effective coordination of the project is the foundation of its
              success. We provide services of well-equipped, highly proficient
              project managers.
            </p>
            <BookCallBtn />
          </div>
          <img loading="lazy"
            src={project}
            alt="Project management"
            className="mx-auto w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset basis-2/5 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/* //////////////  Services */}
      <ServicesSection />

      {/* //////////////// Who we are */}
      <WhoAeAre />

      {/* /////////////////  Book a call */}
      <BookCall />

      {/* ///////////////  Contact */}
      <Contact />

      {/* ////////////////////   Footer */}
      <Footer />
    </main>
  );
}
