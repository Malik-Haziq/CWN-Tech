import team from "@images/team.svg";

export default function WhoWeAre() {
  return (
    <section className="section mb-32 flex flex-col lg:flex-row justify-between items-center">
      <div className="basis-1/2 text-lg md:text-xl">
        <h2 className="h2 mb-8 sm:mb-16">Who we are</h2>
        <p className="text-sub-para mb-4 leading-8">
          CWN Technologies is software development company. We covers specific
          client business needs with the help of the best possible technology
          solutions.
        </p>
        <p className="text-sub-para leading-8">
          Since 2018, we have been inventing digital solutions, helping startups
          and SMBs come out on top in their markets.
        </p>
      </div>
      <img loading="lazy"
        src={team}
        alt="Problem solving"
        className="w-[400px] xlg:w-unset "
      />
    </section>
  );
}
