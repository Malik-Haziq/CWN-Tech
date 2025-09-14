import AnimatedSection from "@components/AnimatedSection/AnimatedSection";
import challengeImg1 from "@images/challenge/img.svg";
import challengeImg2 from "@images/challenge/img-2.svg";
import challengeImg3 from "@images/challenge/img-3.svg";

export default function Challenges() {
  const items = [
    {
      title: "Regulatory Compliance",
      desc:
        "We ensure your software complies with HIPAA, HL7/FHIR, and GDPR standards from the beginning.",
      img: challengeImg1,
      alt: "Regulatory compliance image",
    },
    {
      title: "High Cost of In‑House Team",
      desc:
        "Our outsourcing provides top‑level development expertise at 2–3× the cost efficiency of hiring in‑house.",
      img: challengeImg2,
      alt: "High cost graph",
    },
    {
      title: "Looking for a Reliable Partner",
      desc:
        "We mitigate workflow risks via clear communication, structured progress, and strict adherence to your budget and timeline.",
      img: challengeImg3,
      alt: "Reliable partner image",
    },
  ];

  return (
    <section className="section mb-32">
      <h2 className="h2">Are you facing these challenges?</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 120} className="group">
            <div className="p-[1px] rounded-3xl bg-gradient-to-br from-tertiary/60 via-main/20 to-main-tint/60 transition-all duration-300 group-hover:from-tertiary group-hover:to-main-tint group-hover:shadow-3xl">
              <div className="rounded-3xl bg-white h-full p-6 flex flex-col">
                <h3 className="text-sub-heading text-lg lg:text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sub-para mb-4 leading-relaxed text-sm lg:text-base">{c.desc}</p>
                <div className="relative mt-auto">
                  <div className="absolute -inset-3 rounded-3xl bg-main-mint/70 blur-xl" />
                  <img loading="lazy" src={c.img} alt={c.alt} className="relative mx-auto" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

