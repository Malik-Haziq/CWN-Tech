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
// import price from "@icons/services/budget.svg";
// import javascript from "@icons/stack/java-script.webp";
// import react from "@icons/stack/React.webp";
// import angular from "@icons/stack/angular.webp";
// import bootstrap from "@icons/stack/bootstrap.webp";
// import tailwind from "@icons/stack/tailwind.webp";
// Benefits icons handled inside component
// Process steps now handled inside Process component

import Button from "@components/button/button";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import WhoWeAre from "@components/who-we-are/WhoWeAre";
import BookCall from "@components/book-call/BookCall";
import Services from "@components/services/Services";
// import Certificates from "../../components/Certificates/certificates";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";
// Challenges images handled inside component
import Seo from "@components/seo/Seo";
import AnimatedSection from "@components/AnimatedSection/AnimatedSection";
import LearningShowcase from "@components/learning/LearningShowcase";
import TestimonialsSlider from "@components/testimonials/TestimonialsSlider";
import Process from "@components/process/Process";
import Benefits from "@components/benefits/Benefits";
import Challenges from "@components/challenges/Challenges";

export function Home() {
  const brandLogos = [
    cae,
    dextro,
    doxy,
    itrsoftware,
    realpage,
    controlit,
    speechagain,
  ];

  return (
    <main>
      <Seo
        title="CWN - Software Product Development Company"
        description="We build and scale modern software solutions that deliver business value."
        keywords="CWN, Code With Naqvi, software development, web development"
      />
      <AnimatedSection
        as="header"
        className="section relative overflow-hidden"
      >
        <img
          src={homeBg}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(10deg, rgba(59, 130, 246, 0.00) 12.42%, rgba(62, 183, 187, 0.10) 63.32%)",
          }}
        />
        <div className="py-20 lg:py-28">
          <span className="bg-main text-xs sm:text-sm lg:text-base rounded-lg py-1 px-3 text-white mb-2 inline-block">
            SOFTWARE PRODUCT DEVELOPMENT COMPANY
          </span>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-normal mb-3 max-w-3xl md:max-w-4xl leading-[1.2] sm:leading-[1.18] lg:leading-[1.12]">
            <span className="block">Using <span className="text-main">Engineering</span> &</span>
            <span className="block">creativity to <span className="text-main">transform</span></span>
            <span className="block">your <span className="text-main">product</span>.</span>
          </h1>
          <p className="text-sub-para text-lg sm:text-xl lg:text-2xl max-w-3xl mb-10 mt-8 leading-relaxed">
            We are dedicated to helping your business grow using modern technologies.
            Our goal is to create scalable software that truly delivers value to your business.
          </p>
          <Button
            text={"Let's discuss your project"}
            styles="px-4 sm:px-6 lg:px-10 py-4"
            href="#contact"
          />
        </div>
      </AnimatedSection>

    
      {/* /////////////////////////////////////////  Featured section */}
      <AnimatedSection className="section mb-32 mt-8">
        <h2 className="h2 mb-8">Featured Brands</h2>
        <div className="overflow-x-hidden py-4">
          <div className="flex animate-slide">
            {brandLogos.map((imgSrc, index) => (
              <img loading="lazy"
                key={index}
                src={imgSrc}
                alt="brand"
                className="mx-8 h-16 grayscale hover:grayscale-0 duration-200 flex-shrink-0"
              />
            ))}
            {/* Duplicate the images for seamless loop */}
            {brandLogos.map((imgSrc, index) => (
              <img loading="lazy"
                key={index + "copy"}
                src={imgSrc}
                alt="brand"
                className="mx-8 h-16 grayscale hover:grayscale-0 duration-200 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ///////////////////////  What we offer */}
      <Services />

      {/* ////////////////////////  Ecosystem */}
      <AnimatedSection className="section mb-32">
        <div className="flex flex-col xlg:flex-row gap-5 bg-main-mint px-5 py-8 sm:p-10 rounded-3xl">
          <div className="xlg:basis-auto">
            <h2 className="h2 mb-6 lg:mb-10">
              Every part of your IT Ecosystem.<br/> Taken care of.
            </h2>
            <p className="text-sub-para text-lg sm:text-xl mb-6">
              Complete care of your cloud or on-premisesinfrastructure and applications:
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
          <img loading="lazy"
            src={eco}
            alt="technology ecosystem"
            className="mx-auto w-[450px] md:hidden xlg:inline-block xlg:w-unset xlg:basis-2/5 "
          />
        </div>
      </AnimatedSection>
      {/* ////////////////////////  Challenges you face   */}
      <Challenges />

      {/* ////////////////////////  Benefits you get */}
      <Benefits />

      {/* Combined Courses + Playlist section */}
      <LearningShowcase />

      {/* Auto-sliding testimonials */}
      <TestimonialsSlider />

      {/* <Certificates /> */}
      <Whatsapp />

      {/* //////////////////////  Technology */}
      {/* <section className="section mb-32">
          <h2 className="h2">Technology Stack</h2>
          <section>
            <div className="flex flex-col sm:flex-row items-center flex-1 gap-16 border-b-2">
              <div className="flex flex-col sm:flex-row items-center justify-center">
                <img loading="lazy" src="" alt="" />
                <h3 className="text-xl font-semibold text-sub-heading ">Front-end</h3>
              </div>
              <div className="flex items-center gap-8 flex-wrap">
                <img loading="lazy" src={javascript} alt="javascript" className="h-8"/>
                <img loading="lazy" src={react} alt="react" className="h-8"/>
                <img loading="lazy" src={angular} alt="angular" className="h-8"/>
                <img loading="lazy" src={tailwind} alt="tailwind" className="h-8"/>
                <img loading="lazy" src={bootstrap} alt="bootstrap" className="h-8"/>
              </div>
            </div>
          </section>
        </section> */}

      {/* /////////////////////////////////// */}
      <AnimatedSection className="section mb-32">
        <h2 className="h2">Our core clients are VC-backed startups</h2>
        <div className="flex flex-col items-center md:flex-row gap-5 bg-main-mint px-5 xm:px-10 pt-8 sm:pt-10 lg:px-16 rounded-3xl">
          <img loading="lazy"
            src={challenge}
            alt="Problem solving"
            className="mx-auto w-[400px] md:w-[300px] lg:w-[400px] xlg:w-unset "
          />
          <div className="">
            <h3 className="sub-heading mb-10 xl:mb-14">
              Are you facing these challenges?
            </h3>
            <ul className="text-sub-para list-inside list-disc text-lg sm:text-xl lg:text-2xl">
              <li className="mb-7 flex items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-main mr-3 sm:mr-5 flex-shrink-0"></div>
                <p>Is your project not moving in the right direction?</p>
              </li>
              <li className="mb-7 flex items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-main mr-3 sm:mr-5 flex-shrink-0"></div>
                Are you struggling to build a team of in-house developers?
              </li>
              <li className="mb-7 flex items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-main mr-3 sm:mr-5 flex-shrink-0"></div>
                Is the cost of building a developer team skyrocketing?
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* /////////////////////////  Book a call */}
      {/* <BookCall /> */}

      {/* /////////////////////// Who we are */}
      <WhoWeAre />

      {/* Modern Process section */}
      <Process />

        {/* ////////////////////////  FAQ */}
      <AnimatedSection id="faq" className="section mb-32">
        <h2 className="h2">Frequently Asked Questions</h2>
        <div className="divide-y divide-light-gray rounded-2xl border border-light-gray bg-white shadow-card">
          {[{
            q: "How long does it take to build a website?",
            a: "Most projects take 4–6 weeks, depending on scope.",
          },
          {
            q: "Do you provide ongoing support?",
            a: "Yes, we offer maintenance packages tailored to your needs.",
          },
          {
            q: "What technologies do you use?",
            a: "React, Angular, Ruby on Rails, php and other modern stacks.",
          },
          {
            q: "Do you work with startups?",
            a: "Absolutely, we love growing with startups and SMEs.",
          }].map((f, i) => (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sub-heading">
                {f.q}
                <span className="ml-4 text-sub group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sub-para">{f.a}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>


      {/* ///////////////////////  Contact  */}
      <Contact />

      {/* ///////////////////////   Footer */}
      <Footer />
    </main>
  );
}
