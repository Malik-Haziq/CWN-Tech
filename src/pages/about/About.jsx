import Header from "@components/header/Header";
import WhoAeAre from "@components/who-we-are/WhoWeAre";
import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";

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
      <section className="section mt-32 mb-16">
        <h2 className="h2">Whom we serve</h2>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1">
            <h3 className="text-sub-heading text-xl xl:text-2xl font-medium mb-3">Non-IT enterprises</h3>
            <p className="text-sub-para ">Empowering non-IT enterprises, we provide services aimed at enhancing business performance, optimizing customer service, and driving digital transformation initiatives.</p>
          </div>
          <div className="rounded-2xl py-4 px-5 border-[1px] border-sub flex-1"> 
            <h3 className="text-sub-heading text-xl xl:text-2xl font-medium mb-2">Software product companies</h3>
            <p className="text-sub-para">For software product companies, our services focus on accelerating time-to-market and rapidly attracting customers for their new products, ensuring a competitive edge in the market.</p>
          </div>
        </div>
      </section>
      
      {/* ///////////////////  Who we are */}
      <WhoAeAre />
      {/* /////////////////////  Book a call */}
      <BookCall/>
      {/* /////////////////////  contact */}
      <Contact />

      {/* /////////////////  Footer */}
      <Footer />
    </main>
  );
}
