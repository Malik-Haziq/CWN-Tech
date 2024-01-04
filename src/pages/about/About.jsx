import Button from "@components/button/button";
import Header from "@components/header/Header";

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
    </main>
  );
}
