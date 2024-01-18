import Header from "@components/header/Header";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import ServicesSection from "@components/services/Services";

import services from "@images/solutions/solution.svg";

export function Solutions() {
  const headerBg = {
    background: `linear-gradient(10deg, rgba(59, 130, 246, 0.00) 12.42%, rgba(62, 183, 187, 0.10) 63.32%)`,
  };
  return (
    <main>
      {/* ///////////////////////   Header */}
      <Header
        heading="Startup Software Development"
        text="Attain your objectives with customized software development tailored for startups. A robust and scalable solution serves as the optimal approach to meet your business needs. We offer professional consultations and expert guidance across all stages of the software development lifecycle."
        buttonText="Contact Us"
        buttonHref="#contact"
        img={services}
        imgAlt="solution image"
      />
    </main>
  );
}
