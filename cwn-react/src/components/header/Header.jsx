/* eslint-disable react/prop-types */
import Button from "@components/button/button";
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Code With Naqvi - Learn Web Development</title>
  <meta name="description" content="Code With Naqvi offers React, Rails, and web dev tutorials." />
  <meta name="keywords" content="React, Rails, Web Development, Code With Naqvi" />
  <meta property="og:title" content="Code With Naqvi" />
  <meta property="og:description" content="React and Rails tutorials for developers." />
  <meta property="og:image" content="/cover-image.jpg" />
</Helmet>

export default function Header({
  heading,
  text,
  buttonText,
  buttonHref,
  buttonStyles = "",
  img,
  imgAlt,
}) {
  const headerBg = {
    background: `linear-gradient(10deg, rgba(59, 130, 246, 0.00) 12.42%, rgba(62, 183, 187, 0.10) 63.32%)`,
  };

  return (
    <div className="section" style={headerBg}>
      <header className="flex flex-col md:flex-row justify-between items-center py-16 gap-8">
        <div className="basis-1/2">
          <h1 className="h1">{heading}</h1>
          <img
            src={img}
            alt="about us image"
            className="w-full md:hidden mb-5"
          />
          <p className="text-para text-lg mb-12">{text}</p>
          <Button href={buttonHref} text={buttonText} styles={buttonStyles} />
        </div>
        <div className="basis-1/2">
          <img src={img} alt={imgAlt} className="w-full hidden md:block" />
        </div>
      </header>
    </div>
  );
}
