/* eslint-disable react/prop-types */
import { useState } from "react";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";

export default function Services() {
  return (
    <section className="section mb-32">
      <h2 className="h2">What we offer</h2>
      <ServicesSection />
      <Whatsapp />
    </section>
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
      desc: "As a forward-thinking software development company, we craft reliable, scalable, and secure solutions for any platform, browser, or device. Our blend of industry insight and cutting-edge technologies ensures every product we build aligns seamlessly with user needs and expectations.",
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
        <aside className="bg-main-shade min-w-fit py-6 shadow-2xl text-white font-medium rounded-xl text-xl flex flex-col justify-start items-start gap-4 -translate-y-4 -translate-x-7">
          {headingList.map((el, i) => {
            return (
              <div
                onClick={() => setService(el)}
                className={
                  service === el
                    ? "bg-main px-4 py-5 pr-30 translate-x-5 shadow-3xl rounded-lg cursor-pointer w-[270px] xlg:w-[300px] xl:w-[350px] duration-200 "
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
        {list?.map((li, i) => {
          return <li key={i}>{li}</li>;
        })}
      </ul>
    </div>
  );
}
