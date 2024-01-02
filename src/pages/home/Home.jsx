import eco from "@images/ecosystem.svg";
import challenge from "@images/challenge/Problem solving-amico.svg";
import homeBg from "@images/bg.webp";
import Button from "@components/button/button";
import cae from "@images/featured/cae.webp";
import dextro from "@images/featured/dextro.webp";
import doxy from "@images/featured/doxy.webp";
import itrsoftware from "@images/featured/itrsoftware.webp";
import realpage from "@images/featured/realpage.webp";
import controlit from "@images/featured/controlit.webp";
import speechagain from "@images/featured/speechagain.webp";
import price from "@icons/services/budget.svg";
import { useState } from "react";

export function Home() {
  return (
    <main>
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
            Your <span className="text-main">Product.</span> Your
            <span className="text-main"> Idea.</span> Our
            <span className="text-main"> Innovation</span> and Engineering.
          </h1>
          <p className="text-sub-para text-lg sm:text-xl lg:text-2xl sm:w-10/12 lg:w-1/2 mb-10">
            Elevate your vision using our extensive range of software
            development and expansion solutions.
          </p>
          <Button
            text={"Let's discuss your project"}
            styles="px-4 sm:px-6 lg:px-10 py-4"
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

      {/* ///////////////////////  Explore Our Offering */}

      <section className="section mb-32">
        <h2 className="h2">Explore Our Offering</h2>
        <ServicesSection />
      </section>

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

      {/* /////////////////////// Who we are */}
      <section className="section mb-32 flex flex-col lg:flex-row justify-between items-center">
        <div className="basis-1/2 text-lg md:text-xl">
          <h2 className="h2 mb-8 sm:mb-16">Who we are</h2>
          <p className="text-sub-para mb-4">
            CWN Technologies is a full-cycle app & software development company
            which covers specific client business needs with the help of the
            best possible technology solutions.
          </p>
          <p className="text-sub-para">
            Since 2018, we have been inventing digital solutions, helping
            startups and SMBs come out on top in their markets.
          </p>
        </div>
        <img
          src={challenge}
          alt="Problem solving"
          className="mx-auto w-[400px] xlg:w-unset "
        />
      </section>

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
      <section className="section mb-32 bg-main-mint">
        <div className="py-16">
          <h2 className="h2 mb-8">Let's Connect!</h2>
          <p className="text-para mb-8">
            Send us a message, and we'll promptly discuss your project with you.
          </p>
          <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <form className="flex flex-col gap-8">
              <textarea
                cols="30"
                rows="4"
                placeholder="How we can help you?"
                className="text-sub-para resize-none p-4 rounded-lg focus:outline-none max-w-[592px]"
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-8">
                <Input type={"text"} placeholder={"Full Name*"} />
                <Input type={"email"} placeholder={"Work Email*"} />
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                <Input type={"tel"} placeholder={"Work Phone"} />
                <label className="text-sub-para text-sm flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>
                    I agree with
                    <a
                      href="#"
                      className="text-main hover:text-sub-para duration-500"
                    >
                      terms & conditions
                    </a>
                  </span>
                </label>
              </div>
              <button className="cursor-pointer bg-main px-7 py-3 mt-2 uppercase font-semibold text-white rounded-lg duration-500 hover:bg-main-tint focus:bg-main-shade w-fit">
                Get in touch
              </button>
            </form>
            <div className="">
              <h3 className="text-sub-heading font-medium text-3xl mb-6">
                What’s next?
              </h3>
              <ol className=" flex flex-col gap-6 text-xl text-sub-para ">
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    1
                  </div>
                  <p>
                    We start by signing an NDA to ensure your ideas are
                    protected.
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    2
                  </div>
                  <p>Then, our team will analyze your requirements.</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    3
                  </div>
                  <p>You get a detailed project outline.</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-main-tint-1 text-para rounded-full w-9 h-9 shrink-0 flex items-center justify-center">
                    4
                  </div>
                  <p>
                    We bring your project to life, so you can focus on growing
                    your business.
                  </p>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      className="border-none focus:outline-none p-4 rounded-lg text-sub-para"
      placeholder={placeholder}
    />
  );
}

function ServicesSection() {
  const [service, setService] = useState("Web Development");

  const headingList = [
    "Web Development",
    "Software Development",
    "UI & UX Design",
    "SEO",
    "Marketing Services",
    "App Development",
  ];
  const services = [
    {
      heading: "Web Development",
      desc: "Our web development services embody innovation and reliability. We engineer dynamic and responsive websites that captivate audiences across devices. Our expertise encompasses the entire web development spectrum, from front-end design to back-end functionality.",
      list: [
        "Web Development Consulting",
        "Frontend Development",
        "Backend Development",
        "E-commerce Development",
        "Responsive Design",
        "Website Maintenance",
        "Performance Optimization",
      ],
    },
    {
      heading: "Software Development",
      desc: "A software development company with 34 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
      list: [
        "Software consulting",
        "Software development",
        "Software outsourcing",
        "Product development",
        "Team augmentation",
        "software modernization",
      ],
    },
    {
      heading: "UI & UX Design",
      desc: "Our UI & UX design services redefine user experiences. We fuse creativity with functionality, delivering visually stunning and intuitively designed interfaces. Our approach combines user-centric design principles with the latest trends, ensuring optimal engagement and satisfaction.",
      list: [
        "UI/UX Consulting",
        "Wireframing and Prototyping",
        "User Research",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design System Development",
      ],
    },
    {
      heading: "SEO",
      desc: "Our commitment to excellence has driven our SEO services. We optimize digital landscapes, ensuring visibility and relevance across search engines. With a strategic approach, we elevate online presence and drive organic traffic, enabling businesses to thrive in the digital sphere.",
      list: [
        "SEO Consulting",
        "On-page and Off-page SEO",
        "Keyword Strategy",
        "SEO Audits",
        "Link Building",
        "Local SEO",
        "SEO Analytics and Reporting",
      ],
    },
    {
      heading: "Marketing Services",
      desc: "Our marketing services are synonymous with success. We leverage comprehensive strategies, innovative campaigns, and data-driven insights to elevate brand presence. From traditional to digital channels, we craft compelling narratives that resonate with target audiences, fostering lasting connections.",
      list: [
        "Marketing Strategy",
        "Digital Marketing",
        "Content Marketing",
        "Social Media Marketing",
        "Email Marketing",
        "Campaign Management",
        "Analytics and Reporting",
      ],
    },
    {
      heading: "App Development",
      desc: "Our app development services epitomize excellence. Crafting reliable, scalable, and secure applications compatible with any OS, browser, or device is at the core of our expertise. We seamlessly blend industry knowledge with cutting-edge IT advancements to provide tailored solutions and products that align precisely with user needs and behaviors.",
      list: [
        "App Development Consulting",
        "App Development",
        "Development Outsourcing",
        "Product Development",
        "Team Augmentation",
        "App Modernization",
      ],
    },
  ];

  const [current] = services.filter((el) => {
    if (el.heading !== service) return;
    return el;
  });

  return (
    <>
      <div className="hidden lg:flex gap-6 xl:gap-10 pr-8 shadow-3xl relative translate-x-[2%] w-[98%] h-[570px] rounded-3xl">
        <aside className="bg-main-shade min-w-fit py-6 shadow-2xl text-white font-medium text-xl flex flex-col justify-start items-start gap-4 -translate-y-4 -translate-x-7">
          {headingList.map((el, i) => {
            return (
              <div
                onClick={() => setService(el)}
                className={
                  service === el
                    ? "bg-main px-4 py-5 pr-30 translate-x-5 shadow-3xl cursor-pointer w-[270px] xlg:w-[300px] xl:w-[350px] duration-200 "
                    : " px-4 py-5 pr-30 w-[270px] xlg:w-[300px] xl:w-[350px] translate-x-5 hover:underline cursor-pointer duration-200"
                }
                key={i}
              >
                <a>{el}</a>
              </div>
            );
          })}
        </aside>
        {service === current.heading && (
          <EachService
            heading={current.heading}
            desc={current.desc}
            list={current.list}
          />
        )}
      </div>
      <div className="block lg:hidden">
        {services.map((el, i) => {
          return (
            <EachService
              heading={el.heading}
              desc={el.desc}
              list={el.list}
              containerStyles={"shadow-3xl px-4 py-8"}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
}

function EachService({ heading, desc, list, containerStyles }) {
  return (
    <div className={"my-10 " + containerStyles}>
      <h3 className="sub-heading mb-10 text-sub-heading">{heading}</h3>
      <p className="text-sub-para text-lg md:text-xl leading-8 mb-5 sm:mb-12">
        {desc}
      </p>
      <ul className="grid sm:grid-cols-2 text-lg md:text-xl gap-y-2 sm:gap-y-4 md:gap-y-8 gap-2  list-disc list-inside sm:text-sub-para">
        {list.map((li, i) => {
          return <li key={i}>{li}</li>;
        })}
      </ul>
    </div>
  );
}
