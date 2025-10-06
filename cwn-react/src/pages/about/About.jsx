import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import Services from "@components/services/Services";
import Button from "@components/button/button";

import ourStory from "@images/about/our-story.svg";
import toqeerPhoto from "@images/about/toqeer.jpeg";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";
import Seo from "@components/seo/Seo";
import AnimatedSection from "@components/AnimatedSection/AnimatedSection";

export function About() {
  return (
    <main>
      <Seo
        title="About Us | Code With Naqvi"
        description="Learn about CWN's mission and the team crafting innovative software solutions."
        keywords="About CWN, Code With Naqvi, software company"
      />
      <AnimatedSection className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#02070C]" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(140%_65%_at_0%_40%,rgba(30,113,113,0.32)_0%,rgba(9,17,26,0.15)_52%,rgba(2,6,12,0.92)_100%)]"
          aria-hidden="true"
        />
        <div className="section relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full max-w-2xl text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.3em] text-main-tint">
            My Journey
          </span>

          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            Developer, Instructor,{" "}
            <span className="text-main-tint">Problem Solver</span>
          </h1>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Hi, I'm ToqeerNaqvi — a Software Engineer and Instructor from Lahore, Pakistan. I help
              people learn coding and build production-grade web products while running CWN Technologies
              to support founders worldwide.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/70">
              What started as freelancing hustle is now a blended studio and academy. We obsess over
              craft, move fast with clarity, and keep our partners and students winning with real-world
              shipping experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
            
            </div>
              <ul className="mt-10 grid gap-4 text-white/65 sm:grid-cols-2">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-main-tint" />
              <span>Builds modern web applications for clients using React, Angular, php and Ruby on Rails.</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-main-tint" />
              <span>Works with startups and individuals to design and develop custom digital solutions.</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-main-tint" />
              <span>Teaches programming and project-based learning through his YouTube channel.</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-main-tint" />
              <span>Passionate about mentoring beginners to become confident developers.</span>
            </li>
          </ul>

          </div>
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg">
            <span
              className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-main/50 via-transparent to-main-tint/40 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_-40px_rgba(20,191,187,0.45)] dark:bg-[#060B12]/80">
              <img
                loading="lazy"
                src={toqeerPhoto}
                alt="Toqeer Naqvi portrait"
                className="h-full w-full object-cover object-center"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Whatsapp />

      {/* /////////////////////  Whom we serve */}
      <AnimatedSection className="section md:mt-16 mb-32">
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
      </AnimatedSection>

      {/* /////////////////////  Our story */}
      <AnimatedSection className="section mb-32 flex flex-col-reverse lg:flex-row justify-between items-center">
        <img loading="lazy"
          src={ourStory}
          alt="Problem solving"
          className="w-[400px] xlg:w-unset "
        />
        <div className="basis-1/2 text-lg md:text-xl">
          <h2 className="h2 mb-8 sm:mb-16">Our Story</h2>
          <p className="text-sub-para mb-4 leading-8">
            CWN began at a single desk where Toqeer balanced freelancing gigs with late-night learning sprints. Word-of-mouth wins turned into repeat clients, collaborators became teammates, and a clear playbook emerged: ship fast, stay transparent, and always leave the product better than we found it.
          </p>
          <p className="text-sub-para leading-8">
            Today we build products and learning experiences for founders, startups, and enterprises who want pragmatic partners. The journey is still rooted in the same grit - experiment, iterate, and keep showing up for the people who trust us with their ideas.
          </p>
        </div>
      </AnimatedSection>

      {/* ///////////////////  Who we are */}
      <WhoAeAre />

      {/* //////////////////////  Mission & Vision */}
      <AnimatedSection className="section mt-32 mb-32">
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-10">
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1">
            <h2 className="h2 mb-10">Our vision</h2>
            <p className="text-sub-para mb-4 leading-8 text-lg">
              We imagine a community where learning to code and launching digital products feels collaborative, practical, and borderless. CWN exists to make real-world software craftsmanship and mentorship accessible for anyone who is ready to build.
            </p>
          </div>
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1 ">
            <h2 className="h2 mb-10">Our mission</h2>
            <p className="text-sub-para mb-4 leading-8 text-lg">
              We team up with ambitious founders, operators, and learners to design resilient software, teach modern skills, and transfer knowledge as we go. Every engagement - whether an enterprise build or a cohort workshop - is grounded in transparency, shipping value, and investing in people for the long haul.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* /////////////////////  Services */}
      <Services />

      {/* /////////////////////  Book a call */}
      <BookCall />

      {/* /////////////////////  contact */}
      <Contact />

      {/* /////////////////  Footer */}
      <Footer />
    </main>
  );
}
