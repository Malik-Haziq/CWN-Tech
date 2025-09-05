import AnimatedSection from "@components/AnimatedSection/AnimatedSection";
import { Link } from "react-router-dom";
import htmlThumbnail from "@images/courses/html.jpeg";
import cssThumbnail from "@images/courses/css.jpeg";
import jsThumbnail from "@images/courses/js.jpeg";

export default function Learning() {
  const resources = [
    {
      img: htmlThumbnail,
      alt: "HTML Basics thumbnail",
      title: "HTML Basics",
      description: "Build a solid foundation with semantic HTML5.",
      link: "/blogs",
    },
    {
      img: cssThumbnail,
      alt: "CSS Mastery thumbnail",
      title: "CSS Mastery",
      description: "Craft beautiful, responsive layouts with modern CSS.",
      link: "/blogs",
    },
    {
      img: jsThumbnail,
      alt: "JavaScript Essentials thumbnail",
      title: "JavaScript Essentials",
      description: "Add interactivity with powerful JavaScript techniques.",
      link: "/blogs",
    },
  ];

  return (
    <AnimatedSection className="section mb-32">
      <h2 className="h2 mb-12">Learning Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {resources.map((res) => (
          <AnimatedSection
            key={res.title}
            as={Link}
            to={res.link}
            className="group block h-full rounded-xl overflow-hidden bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-105"
          >
            <img
              loading="lazy"
              src={res.img}
              alt={res.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-semibold text-sub-heading">{res.title}</h3>
              <p className="mb-6 text-para">{res.description}</p>
              <span className="inline-block px-5 py-3 text-white text-lg font-semibold bg-main rounded-lg group-hover:bg-main-shade transition-colors duration-300">
                Learn More
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}

