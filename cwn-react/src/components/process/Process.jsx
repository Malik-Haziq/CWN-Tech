import AnimatedSection from "@components/AnimatedSection/AnimatedSection";
import requirement from "@icons/process/requirement.webp";
import ui from "@icons/process/ux-design.webp";
import prototype from "@icons/process/prototype.webp";
import development from "@icons/process/development.webp";
import qa from "@icons/process/testing.webp";
import deployment from "@icons/process/deployment.webp";
import maintenance from "@icons/process/maintenance.webp";

export default function Process() {
  const steps = [
    {
      icon: requirement,
      title: "1. Requirement Gathering",
      desc:
        "Our priority is to gather the requirements, resources, and information needed to start the project.",
    },
    {
      icon: ui,
      title: "2. UI/UX Design",
      desc:
        "We create attractive designs using the latest tools to ensure a user‑friendly experience.",
    },
    {
      icon: prototype,
      title: "3. Prototype",
      desc:
        "After designing, you will receive your prototype, which will move forward to development.",
    },
    {
      icon: development,
      title: "4. Development",
      desc:
        "We build web platforms and mobile apps using modern tools and transparent processes.",
    },
    {
      icon: qa,
      title: "5. Quality Assurance",
      desc:
        "We prioritize quality and deliver a 100% bug‑free product without compromise.",
    },
    {
      icon: deployment,
      title: "6. Deployment",
      desc:
        "After testing and checks, your application is deployed to production.",
    },
    {
      icon: maintenance,
      title: "7. Support & Maintenance",
      desc:
        "We provide ongoing support and are available to address your questions after launch.",
    },
  ];

  return (
    <section className="section mb-32">
      <h2 className="h2">Process we follow</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <AnimatedSection
            key={s.title}
            delay={i * 120}
            className="group"
          >
            <div className="p-[1px] rounded-3xl bg-gradient-to-br from-tertiary/60 via-main/20 to-main-tint/60 transition-all duration-300 group-hover:from-tertiary group-hover:to-main-tint group-hover:shadow-3xl">
              <div className="rounded-3xl bg-white h-full p-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute -inset-2 rounded-full bg-main-mint blur-md opacity-60 group-hover:opacity-80 transition" />
                  <img loading="lazy" src={s.icon} alt="step icon" className="relative w-14" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-sub-heading">{s.title}</h3>
                <p className="text-sub-para mt-2 text-sm lg:text-base">{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

