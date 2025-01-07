import people from "../../assets/images/choose us/people.webp";
import arrow from "../../assets/images/choose us/arrow.svg";

export default function WhyChooseUS() {
  return (
    <section className="px-6 md:px-12 lg:px-20 xl:px-44 py-10 md:py-20 flex flex-col lg:flex-row gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-2/4 bg-main p-6 md:p-12 rounded-xl text-white">
        <div className="flex justify-between items-center mb-6 md:mb-8 border-b pb-3 md:pb-5">
          <h2 className="text-2xl md:text-4xl font-medium">Who we are</h2>
          <a
            href="#"
            className="bg-white py-2 px-4 md:p-3 md:px-6 rounded-md text-main"
          >
            About us
          </a>
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
          className="w-full max-w-xl lg:max-w-full mb-4 lg:mb-6 mx-auto"
        />
        <div className="bg-main-tint-1 p-6 md:p-8 px-4 md:px-6 rounded-xl">
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
              <p className="text-main text-lg font-medium">150+</p>
            </div>
            <div className="flex flex-1 gap-4 md:gap-6 bg-white p-2 px-4 items-center rounded-md">
              <p className="text-para text-sm md:text-base">
                Products delivered:
              </p>
              <p className="text-main text-lg font-medium">150+</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-1 gap-4 md:gap-6 bg-white p-2 px-4 items-center rounded-md">
              <p className="text-para text-sm md:text-base">
                Products delivered:
              </p>
              <p className="text-main text-lg font-medium">150+</p>
            </div>
            <div className="flex flex-1 gap-4 md:gap-6 bg-white p-2 px-4 items-center rounded-md">
              <p className="text-para text-sm md:text-base">
                Products delivered:
              </p>
              <p className="text-main text-lg font-medium">150+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
