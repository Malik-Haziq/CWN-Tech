import AnimatedSection from "@components/AnimatedSection/AnimatedSection";
import cost from "@icons/benefits/cost.webp";
import service from "@icons/benefits/service.webp";
import solution from "@icons/benefits/solution.webp";

export default function Benefits() {
  const items = [
    {
      icon: cost,
      title: "Quick & Inexpensive",
      desc:
        "Save up to 40% on costs compared to in-house development, and reduce your time to market by up to 30%.",
    },
    {
      icon: service,
      title: "Custom Service",
      desc:
        "You control your future product. If you want a specific feature, we will make it happen for you.",
    },
    {
      icon: solution,
      title: "Innovative Solutions",
      desc:
        "Benefit from our team's creative and forward-thinking approach to solving problems.",
    },
  ];

  return (
    <section className="section mb-32">
      <h2 className="h2">Benefits you get</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 120}>
            <div className="p-[1px] rounded-3xl bg-gradient-to-br from-tertiary/60 via-main/20 to-main-tint/60 transition-all duration-300 hover:from-tertiary hover:to-main-tint hover:shadow-3xl">
              <div className="rounded-3xl bg-white h-full p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 flex items-center justify-center">
                    <div className="absolute -inset-2 rounded-full bg-main-mint blur-md opacity-60" />
                    <img loading="lazy" src={b.icon} alt="benefit icon" className="relative w-10" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-sub-heading">{b.title}</h3>
                    <p className="text-sub-para mt-2 text-sm lg:text-base leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

