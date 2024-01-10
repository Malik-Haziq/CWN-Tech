import eco from "@images/ecosystem.svg";
import challenge from "@images/challenge/Problem solving-amico.svg";
import homeBg from "@images/bg.webp";
import cae from "@images/featured/cae.webp";
import dextro from "@images/featured/dextro.webp";
import doxy from "@images/featured/doxy.webp";
import itrsoftware from "@images/featured/itrsoftware.webp";
import realpage from "@images/featured/realpage.webp";
import controlit from "@images/featured/controlit.webp";
import speechagain from "@images/featured/speechagain.webp";
import price from "@icons/services/budget.svg";
import javascript from "@icons/stack/java-script.jpg";
import react from "@icons/stack/React.png";
import angular from "@icons/stack/angular.png";
import bootstrap from "@icons/stack/bootstrap.png";
import tailwind from "@icons/stack/tailwind.png";

import Button from "@components/button/button";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import BookCall from "@components/book-call/BookCall";
import Services from "@components/services/Services";

import { useState } from "react";

export function Home() {
  return (
    <main className="font-">
      <header
        style={{
          background: `url(${homeBg}), linear-gradient(10deg, rgba(59, 130, 246, 0.00) 12.42%, rgba(62, 183, 187, 0.10) 63.32%)`,
        }}
        className="section"
      >
        <div className=" py-24 lg:py-36">
          <span className="bg-main text-xs sm:text-sm lg:text-base rounded-lg py-1 px-3 text-white mb-2 inline-block">
            SOFTWARE PRODUCT DEVELOPMENT COMPANY
          </span>
          <h1 className="font-bold text-4xl lg:text-8xl md:text-7xl sm:text-5xl mb-2 xl:w-10/12">
            Your
            <span className="text-main"> Product.</span>
            Your
            <span className="text-main"> Idea.</span> Our
            <span className="text-main"> Innovation </span>
            and Engineering.
          </h1>
          <p className="text-sub-para text-lg sm:text-xl lg:text-2xl sm:w-10/12 lg:w-1/2 mb-10">
            Elevate your vision using our extensive range of software
            development and expansion solutions.
          </p>
          <Button
            text={"Let's discuss your project"}
            styles="px-4 sm:px-6 lg:px-10 py-4"
            href="#contact"
          />
        </div>
      </header>

      {/* /////////////////////////////////////////  Featured section */}
      <section className="section mb-32">
        <h2 className="h2">Featured Brands</h2>
        <div className="flex justify-between flex-wrap gap-2">
          <img
            src={cae}
            alt="cae"
            className="grayscale hover:grayscale-0 duration-200"
          />
          <img
            src={dextro}
            alt="dextro"
            className="grayscale hover:grayscale-0 duration-200"
          />
          <img
            src={doxy}
            alt="doxy"
            className="grayscale hover:grayscale-0 duration-200"
          />
          <img
            src={itrsoftware}
            alt="itrsoftware"
            className="grayscale hover:grayscale-0 duration-200"
          />
          <img
            src={realpage}
            alt="realpage"
            className="grayscale hover:grayscale-0 duration-200"
          />
          <img
            src={controlit}
            alt="controlit"
            className="grayscale hover:grayscale-0 duration-200"
          />
          <img
            src={speechagain}
            alt="speechagain"
            className="grayscale hover:grayscale-0 duration-200"
          />
        </div>
      </section>

      {/* ///////////////////////  What we offer */}
      <Services/>

      {/* ////////////////////////  Ecosystem */}
      <section className="section mb-32">
        <div className="flex flex-col xlg:flex-row gap-5 bg-main-mint px-5 py-8 sm:p-10 rounded-3xl">
          <div className="xlg:basis-auto">
            <h2 className="h2 mb-6 lg:mb-10">
              Every Part of Your IT Ecosystem. Taken Care Of.
            </h2>
            <p className="text-sub-para text-lg sm:text-xl mb-6">
              Comprehensive care of your cloud or on-premises infrastructure and
              applications:
            </p>
            <ul className="text-para text-base lg:text-xl list-inside list-disc grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="li relative">Consulting</li>
              <li className="li relative">Security</li>
              <li className="li relative">Implementation</li>
              <li className="li relative">Help desk services</li>
              <li className="li relative">Management and support</li>
              <li className="li relative">Migration</li>
            </ul>
          </div>
          <img
            src={eco}
            alt="technology ecosystem"
            className="mx-auto w-[450px] md:hidden xlg:inline-block xlg:w-unset xlg:basis-2/5 "
          />
        </div>
      </section>

      {/* ///////////////////////////////////*/}
      <section className="section mb-32">
        <h2 className="h2">Cooperation with us helps to</h2>
        <div className="flex flex-col sm:flex-row justify-between gap-8 flex-wrap text-lg md:text-xl">
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1">
            <img src={price} alt="budget icon" className="w-16 mb-7" />
            <h3 className="h3 mb-6 sub-heading uppercase">
              Quick & Inexpensive
            </h3>
            <p className="text-sub-para ">
              Save up to 40% in costs compared to in-house development and
              reduce time to market up to 30%.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1">
            <img src={price} alt="budget icon" className="w-16 mb-7" />
            <h3 className="h3 mb-6 sub-heading uppercase">
              GET CUSTOM SERVICE
            </h3>
            <p className="text-sub-para ">
              You are in the driver’s seat of your future product. If you want
              to execute a certain feature, we will make it happen for you.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1">
            <img src={price} alt="budget icon" className="w-16 mb-7" />
            <h3 className="h3 mb-6 sub-heading uppercase">
              INNOVATIVE SOLUTIONS
            </h3>
            <p className="text-sub-para ">
              Benefit from our team's creative and forward-thinking approach to
              problem-solving
            </p>
          </div>
        </div>
      </section>

        {/* //////////////////////  Technology */}
        {/* <section className="section mb-32">
          <h2 className="h2">Technology Stack</h2>
          <section>
            <div className="flex flex-col sm:flex-row items-center flex-1 gap-16 border-b-2">
              <div className="flex flex-col sm:flex-row items-center justify-center">
                <img src="" alt="" />
                <h3 className="text-xl font-semibold text-sub-heading ">Front-end</h3>
              </div>
              <div className="flex items-center gap-8 flex-wrap">
                <img src={javascript} alt="javascript" className="h-8"/>
                <img src={react} alt="react" className="h-8"/>
                <img src={angular} alt="angular" className="h-8"/>
                <img src={tailwind} alt="tailwind" className="h-8"/>
                <img src={bootstrap} alt="bootstrap" className="h-8"/>
              </div>
            </div>
          </section>
        </section> */}

      {/* /////////////////////////////////// */}
      <section className="section mb-32">
        <h2 className="h2">Our core clients are VC-backed startups</h2>
        <div className="flex flex-col xlg:flex-row gap-5 bg-main-mint px-5 xm:px-10 pt-8 sm:pt-10 lg:px-16 rounded-3xl">
          <img
            src={challenge}
            alt="Problem solving"
            className="mx-auto w-[400px] md:hidden xlg:inline-block xlg:w-unset "
          />
          <div className="">
            <h3 className="sub-heading mb-10 xl:mb-14">
              Are you facing these challenges?
            </h3>
            <ul className="text-sub-para list-inside list-disc text-lg sm:text-xl lg:text-2xl">
              <li className="mb-7 flex items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-main mr-3 sm:mr-5 flex-shrink-0"></div>
                <p>Your project is not moving in the right direction?</p>
              </li>
              <li className="mb-7 flex items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-main mr-3 sm:mr-5 flex-shrink-0"></div>
                You're struggling to build a team of in-house developers?
              </li>
              <li className="mb-7 flex items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-main mr-3 sm:mr-5 flex-shrink-0"></div>
                The cost of building a team of developers is skyrocketing?
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* /////////////////////////  Book a call */}
      <BookCall/>

      {/* /////////////////////// Who we are */}
      <WhoAeAre />

      {/* ///////////////////////  process */}
      <section className="section mb-32">
        <h2 className="h2">Process we follow</h2>
        <div className="text-lg md:text-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1 flex items-center justify-center flex-col">
            <img src={price} alt="budget icon" className="w-16 mb-3" />
            <h3 className="mb-2 text-lg lg:text-xl font-medium">
              1. Requirement Gathering
            </h3>
            <p className="text-sub-para text-center">
              We follow the first and foremost priority of gathering
              requirements, resources, and information to begin our project.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1 flex items-center justify-center flex-col">
            <img src={price} alt="budget icon" className="w-16 mb-3" />
            <h3 className="mb-2 text-lg lg:text-xl font-medium">
              2. UI/UX Design
            </h3>
            <p className="text-sub-para text-center">
              We create catchy and charming designs with the latest tools of
              designing to make it a best user-friendly experience.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1 flex items-center justify-center flex-col">
            <img src={price} alt="budget icon" className="w-16 mb-3" />
            <h3 className="mb-2 text-lg lg:text-xl font-medium">
              3. Prototype
            </h3>
            <p className="text-sub-para text-center">
              After designing, you will get your prototype, which will be sent
              ahead for the development process for the product.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1 flex items-center justify-center flex-col">
            <img src={price} alt="budget icon" className="w-16 mb-3" />
            <h3 className="mb-2 text-lg lg:text-xl font-medium">
              4. Development
            </h3>
            <p className="text-sub-para text-center">
              Development of mobile application/web/blockchain started using
              latest tools and technologies with transparency.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1 flex items-center justify-center flex-col">
            <img src={price} alt="budget icon" className="w-16 mb-3" />
            <h3 className="mb-2 text-lg lg:text-xl font-medium">
              5. Quality Assurance
            </h3>
            <p className="text-sub-para text-center">
              Hyperlink values quality and provides 100% bug free application
              with no compromisation in it.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 min-w-[300px] flex-1 flex items-center justify-center flex-col">
            <img src={price} alt="budget icon" className="w-16 mb-3" />
            <h3 className="mb-2 text-lg lg:text-xl font-medium">
              6. Deployment
            </h3>
            <p className="text-sub-para text-center">
              After trial and following all processes, your app is ready to
              launch on the App store or Play Store.
            </p>
          </div>
          <div className="shadow-card rounded-3xl p-6 flex items-center justify-center flex-col">
            <img src={price} alt="budget icon" className="w-16 mb-3" />
            <h3 className="mb-2 text-lg lg:text-xl font-medium">
              7. Support & Maintenance
            </h3>
            <p className="text-sub-para text-center">
              Our company offers you all support and the team is always ready to
              answer every query after deployment.
            </p>
          </div>
        </div>
      </section>

      {/* ///////////////////////  Contact  */}
      <Contact />

      {/* ///////////////////////   Footer */}
      <Footer />
    </main>
  );
}
