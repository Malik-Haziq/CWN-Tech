import awards from "../../assets/images/certificates/awards.webp";
import awards1 from "../../assets/images/certificates/award1.svg";
import awards2 from "../../assets/images/certificates/award2.svg";
import awards3 from "../../assets/images/certificates/award3.svg";

import aws from "../../assets/images/certificates/aws.svg";
import microsoft from "../../assets/images/certificates/microsoft.svg";

export default function Awards() {
  return (
    <>
      <section className="section flex gap-4">
        <div className="bg-main py-6 px-6 rounded-lg w-6/12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-medium text-white">Inc. 5000</h2>
            <div className="flex gap-2">
              <p className="border py-1 px-2 rounded">2020</p>
              <p className="border py-1 px-2 rounded">2021</p>
              <p className="border py-1 px-2 rounded">2022</p>
              <p className="border py-1 px-2 rounded">2023</p>
            </div>
          </div>
          <p className="text-white text-lg mb-8">
            Named among the Inc.5000 (2020, 2021, 2022, 2023) & Regionals (2021,
            2022, 2024) fastest-growing private companies in America
          </p>
          <img loading="lazy" src={awards} alt="awards" />
        </div>
        <div className="border py-6 px-6 rounded-lg w-6/12">
          <h2 className="text-4xl font-medium mb-5 text-s">Certifications</h2>
          <div className="flex justify-between mb-6">
            <img loading="lazy" src={awards1} alt="awards1" />
            <img loading="lazy" src={awards2} alt="awards2" />
            <img loading="lazy" src={awards3} alt="awards3" />
          </div>
          <div className="flex justify-center gap-8 items-center">
            <img loading="lazy" src={aws} alt="aws" />
            <img loading="lazy" src={microsoft} alt="microsoft" />
          </div>
        </div>
      </section>
    </>
  );
}
