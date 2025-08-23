/* eslint-disable react/prop-types */
import Button from "@components/button/button";
import "./Header.css";

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
          <div className="image-wrapper md:hidden mb-5">
            <img src={img} alt={imgAlt} className="floating-img" />
          </div>
          <p className="text-para text-lg mb-12">{text}</p>
          <Button href={buttonHref} text={buttonText} styles={buttonStyles} />
        </div>
        <div className="basis-1/2">
          <div className="image-wrapper hidden md:block">
            <img src={img} alt={imgAlt} className="floating-img" />
          </div>
        </div>
      </header>
    </div>
  );
}
