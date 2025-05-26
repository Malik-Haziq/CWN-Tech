import people from "../../assets/images/choose us/team.jpg";
import arrow from "../../assets/images/choose us/arrow.svg";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Code With Naqvi - Learn Web Development</title>
  <meta name="description" content="Code With Naqvi offers React, Rails, and web dev tutorials." />
  <meta name="keywords" content="React, Rails, Web Development, Code With Naqvi" />
  <meta property="og:title" content="Code With Naqvi" />
  <meta property="og:description" content="React and Rails tutorials for developers." />
  <meta property="og:image" content="/cover-image.jpg" />
</Helmet>


export default function WhyChooseUS() {
  return (
    <section className="section mb-32 flex flex-col lg:flex-row gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-2/4 bg-main p-6 md:p-12 rounded-xl text-white">
        <div className="flex justify-between items-center mb-6 md:mb-8 border-b-2 border-main-tint-1 pb-2 md:pb-4">
          <h3 className="text-2xl md:text-4xl font-medium">Who we are</h3>
          <Link
            to="/about-us"
            className="bg-white hover:bg-main-mint py-2 px-4 md:p-3 md:px-6 rounded-md text-main hover:text-main-shade font-semibold duration-150"
          >
            About us
          </Link>
        </div>
        <div>
          <p className="text-base md:text-lg mb-4">
            CWN Technologies is software development company. We cover specific
            client business needs with the help of the best possible technology
            solutions.
          </p>
          <p className="text-base md:text-lg">
            Since 2018, we have been inventing digital solutions, helping
            startups and SMBs come out on top in their markets.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/4">
        <img
          src={people}
          alt="people"
          className="w-full max-w-xl mb-4 lg:mb-6 h-fit"
        />
        <div className="bg-main p-6 md:p-8 px-4 md:px-6 rounded-xl">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-2xl font-medium text-white">
              Why choose us
            </h2>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex flex-1 gap-4 md:gap-6 bg-white p-2 px-4 items-center rounded-md">
              <p className="text-para text-sm md:text-base">
                Products delivered:
              </p>
              <p className="text-main text-lg font-medium">120+</p>
            </div>
            <div className="flex flex-1 gap-4 md:gap-6 bg-white p-2 px-4 items-center rounded-md">
              <p className="text-para text-sm md:text-base">
                Years on the market:
              </p>
              <p className="text-main text-lg font-medium">10</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-1 gap-4 md:gap-6 bg-white p-2 px-4 items-center rounded-md">
              <p className="text-para text-sm md:text-base">
                Client satisfaction rate:
              </p>
              <p className="text-main text-lg font-medium">99.9%</p>
            </div>
            <div className="flex flex-1 gap-4 md:gap-6 bg-white p-2 px-4 items-center rounded-md">
              <p className="text-para text-sm md:text-base">
                Awards & certifications:
              </p>
              <p className="text-main text-lg font-medium">20+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
