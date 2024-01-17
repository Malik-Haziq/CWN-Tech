import Header from "@components/header/Header";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import Services from "@components/services/Services";

import about from "@images/about/about-us.svg";
import ourStory from "@images/about/our-story.svg" 

export function About() {
  const headerBg = {
    background: `linear-gradient(10deg, rgba(59, 130, 246, 0.00) 12.42%, rgba(62, 183, 187, 0.10) 63.32%)`,
  };

  return (
    <main>
      {/* /////////////////  Header */}
      <Header
        heading="About us"
        text="With our full range of digital solutions and development services, we can bring your ideas to life and maximize your value in any market."
        buttonText="Contact Us"
        buttonHref="#contact"
        img={about}
        imgAlt="About us image"
      />

      {/* /////////////////////  Whom we serve */}
      <section className="section mt-32 mb-32">
        <h2 className="h2">Whom we serve</h2>
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-10">
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1">
            <h3 className="text-sub-heading text-xl xl:text-2xl font-medium mb-3">
              Non-IT enterprises
            </h3>
            <p className="text-sub-para ">
              Empowering non-IT enterprises, we provide services aimed at
              enhancing business performance, optimizing customer service, and
              driving digital transformation initiatives.
            </p>
          </div>
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1">
            <h3 className="text-sub-heading text-xl xl:text-2xl font-medium mb-2">
              Software product companies
            </h3>
            <p className="text-sub-para">
              For software product companies, our services focus on accelerating
              time-to-market and rapidly attracting customers for their new
              products, ensuring a competitive edge in the market.
            </p>
          </div>
        </div>
      </section>

      {/* /////////////////////  Our story */}
      <section className="section mb-32 flex flex-col-reverse lg:flex-row justify-between items-center">
        <img
          src={ourStory}
          alt="Problem solving"
          className="w-[400px] xlg:w-unset "
        />
        <div className="basis-1/2 text-lg md:text-xl">
          <h2 className="h2 mb-8 sm:mb-16">Our Story</h2>
          <p className="text-sub-para mb-4 leading-8">
          Founded in 2018 by a teacher and student, CWN has evolved from a dynamic duo to a robust team of over 15 skilled professionals. With a commitment to innovation and client satisfaction, we transform ideas into impactful software solutions. 
          </p>
          <p className="text-sub-para leading-8">
          Join us on our journey of growth and excellence in the ever-evolving world of software development.
          </p>
        </div>
      </section>

      {/* ///////////////////  Who we are */}
      <WhoAeAre />

      {/* //////////////////////  Mission & Vision */}
      <section className="section mt-32 mb-32">
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-10">
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1">
            <h2 className="h2 mb-10">
              Our vision
            </h2>
            <p className="text-sub-para mb-4 leading-8 text-lg">
            At CWN, our vision is to be a trailblazer in technological innovation, pushing the boundaries to shape a future where software solutions set new standards. We aspire to create a digital realm defined by efficiency, accessibility, and transformative possibilities, empowering businesses and individuals alike.
            </p>
          </div>
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1 ">
          <h2 className="h2 mb-10">
              Our mission
            </h2>
            <p className="text-sub-para mb-4 leading-8 text-lg">
            Our mission at CWN is to design and deliver cutting-edge, customized software solutions that not only meet current requirements but anticipate future demands. Through collaboration, transparency, and a relentless pursuit of excellence, we aim to build lasting partnerships, providing clients with reliable and scalable solutions that drive positive impact in the dynamic landscape of software development.
            </p>
          </div>
        </div>
      </section>

      {/* /////////////////////  Services */}
      <Services/>

      {/* /////////////////////  Book a call */}
      <BookCall />

      {/* /////////////////////  contact */}
      <Contact />

      {/* /////////////////  Footer */}
      <Footer />
    </main>
  );
}
