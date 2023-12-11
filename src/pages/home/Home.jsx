import homeBg from "@images/bg.webp";
import Button from "@components/button/button";
import cae from "@images/featured/cae.webp";
import dextro from "@images/featured/dextro.webp";
import doxy from "@images/featured/doxy.webp";
import itrsoftware from "@images/featured/itrsoftware.webp";
import realpage from "@images/featured/realpage.webp";
import controlit from "@images/featured/controlit.webp";
import speechagain from "@images/featured/speechagain.webp";
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

      <section className="section mb-16">
        <h2 className="h2">Explore Our Offering</h2>
        <ServicesSection />
      </section>
    </main>
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
      <div className="hidden lg:flex gap-6 xl:gap-10 pr-8 shadow-3xl relative translate-x-[2%] w-[98%] h-[570px] rounded-md">
        <aside className="bg-main-shade min-w-fit py-6 px-4 shadow-2xl text-white font-medium text-xl flex flex-col justify-start items-start gap-4 -translate-y-4 -translate-x-7">
          {headingList.map((el, i) => {
            return (
              <div
                onClick={() => setService(el)}
                className={
                  service === el
                    ? "bg-main px-4 py-5 pr-30 translate-x-7 xl:translate-x-10 shadow-3xl cursor-pointer w-[250px] xlg:w-[300px] xl:w-[350px] duration-200 "
                    : " px-4 py-5 pr-30 w-[250px] xlg:w-[300px] xl:w-[350px] translate-x-5 xl:translate-x-10 hover:underline cursor-pointer duration-200"
                }
                key={i}
              >
                <a>{el}</a>
              </div>
            );
          })}
        </aside>
        {service === current.heading && (
          <EachService heading={current.heading} desc={current.desc} list={current.list}/>
        )}
      </div>
      <div className="block lg:hidden">
        {services.map((el,i)=>{
          return <EachService heading={el.heading} desc={el.desc} list={el.list} containerStyles={"shadow-3xl px-4 py-8"} key={i}/>
        })}
      </div>
    </>
  );
}

function EachService({heading, desc, list, containerStyles}) {
  return (
    <div className={"my-10 "+ containerStyles} >
      <h3 className="h3 mb-10 text-sub-heading">{heading}</h3>
      <p className="text-sub-para text-lg md:text-xl leading-8 mb-12">{desc}</p>
      <ul className="grid grid-cols-2 text-lg md:text-xl gap-y-2 sm:gap-y-4 md:gap-y-8 gap-2  list-disc list-inside text-sub-para">
        {list.map((li, i) => {
          return <li key={i}>{li}</li>;
        })}
      </ul>
    </div>
  );
}
