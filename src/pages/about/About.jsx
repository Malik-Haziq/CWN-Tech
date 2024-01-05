import Header from "@components/header/Header";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";

import about from "@images/about/about-us.svg";

export function About() {
  const headerBg = {
    background: `linear-gradient(10deg, rgba(59, 130, 246, 0.00) 12.42%, rgba(62, 183, 187, 0.10) 63.32%)`,
  };

  return (
    <main>
      {/* /////////////////  Header */}
      <Header
        heading="About us"
        text="CWN Technologies is a full-cycle app & software development
              company which covers specific client business needs and manage
              them with the help of the best possible technology solutions."
        buttonText="Contact Us"
        buttonHref="#contact"
        img={about}
        imgAlt="About us image"
      />

      {/* /////////////////////  Whom we serve */}
      <section className="section mt-32">
        <h2 className="h2">Whom we serve</h2>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <div className="rounded-2xl border-2 py-4 px-5 shadow-card">
            <h3 className="text-lg lg:text-xl xl:text-2xl font-medium ">Non-IT enterprises</h3>
            <p>Services to improve business performance, optimize customer service, and tap in digital transformation.</p>
          </div>
        </div>
      </section>
      {/* ///////////////////  Who we are */}
      <WhoAeAre />
      {/* /////////////////////  contact */}
      <Contact />

      {/* /////////////////  Footer */}
      <Footer />
    </main>
  );
}
