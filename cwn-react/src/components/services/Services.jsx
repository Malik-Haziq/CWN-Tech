/* eslint-disable react/prop-types */
import { useState } from "react";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";

export default function Services() {
  return (
    <section className="section mb-32">
      <h2 className="h2">Our Expertise</h2>
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
      desc: "Our web development services are about creativity and trust. We build dynamic  and  responsive  websites that engage audiences on various devices. Our skills include all aspects of web development, such as front- end design and back-end functionality.",
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
      desc: "As a progressive software development company, we create reliable, scalable, and secure solutions for any platform, browser, or device. Our mix of industry knowledge and modern technologies ensures that every product we build meets user needs and expectations.",
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
      desc: "Our UI and UX design services change user experiences. We merge creativity with functionality to create visually appealing and easy-to-use interfaces. Our method mixes user- focused design principles with current trends, ensuring high engagement and satisfaction.",
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
      desc: "Our focus on quality has shaped our SEO services. We improve digital spaces to ensure visibility and relevance in search engines. With a thoughtful approach, we boost online presence and increase organic traffic, helping businesses succeed in the digital world.",
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
      desc: "Our marketing services bring success. We use clear strategies, creative campaigns, and data-based insights to improve brand presence. From traditional to digital channels, we create engaging stories that connect with target audiences and build lasting relationships.",
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
      desc: "Our app development services showcase our commitment to quality. We create reliable, scalable, and secure applications that work with any operating system, browser, or device. We combine our industry knowledge with the latest IT improvements to deliver customized solutions and products that meet user needs and behaviors.",
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
        <aside className="bg-main-shade min-w-fit py-6 shadow-2xl text-white font-medium rounded-xl text-xl flex flex-col justify-start items-start gap-3 -translate-y-4 -translate-x-7">
          {headingList.map((el, i) => {
            return (
              <div
                onClick={() => setService(el)}
                className={
                  service === el
                    ? "bg-main ring-1 ring-white/20 px-4 py-5 pr-30 translate-x-5 shadow-3xl rounded-lg cursor-pointer w-[270px] xlg:w-[300px] xl:w-[350px] transition-all duration-200 "
                    : "px-4 py-5 pr-30 w-[270px] xlg:w-[300px] xl:w-[350px] translate-x-5 hover:bg-white/15 hover:translate-x-3 hover:shadow-3xl rounded-lg cursor-pointer transition-all duration-200"
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
