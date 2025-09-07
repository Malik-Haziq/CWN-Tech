import AnimatedSection from "@components/AnimatedSection/AnimatedSection";

export default function Learning() {
  const features = [
    {
      icon: "🧭",
      title: "Beginner-Friendly",
      description:
        "Step-by-step courses designed for absolute beginners to kickstart their coding journey.",
    },
    {
      icon: "🧠",
      title: "Advanced Concepts",
      description:
        "Deep dive into advanced topics and frameworks to level up your skills.",
    },
    {
      icon: "🧪",
      title: "Real-World Projects",
      description:
        "Learn by building real projects and gain hands‑on experience.",
    },
    {
      icon: "💲",
      title: "Affordable Pricing",
      description:
        "Access premium courses at prices tailored for students and professionals.",
    },
    {
      icon: "📚",
      title: "Comprehensive Resources",
      description:
        "Get templates, documentation, and code snippets to enhance your learning.",
    },
    {
      icon: "📈",
      title: "Industry Insights",
      description:
        "Stay updated with the latest trends from the tech industry to keep skills relevant.",
    },
  ];

  return (
    <AnimatedSection className="section mb-32">
      <div className="mb-8">
        <span className="text-sm font-medium text-sub-para">Courses</span>
        <h2 className="h2 mt-1 text-4xl lg:text-5xl">Master Coding with Our Core Offerings</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item) => (
          <AnimatedSection
            key={item.title}
            className="rounded-2xl bg-white border border-light-gray shadow-card p-7 hover:shadow-3xl transition-shadow flex min-h-[180px]"
          >
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-full bg-main-mint text-2xl flex items-center justify-center">
                <span aria-hidden>{item.icon}</span>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-sub-heading">{item.title}</h3>
                <p className="text-sub-para mt-2 text-base lg:text-lg">{item.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h3 className="h2 text-center center-orange-line mb-8">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "I don't have words to thank this man. If you're a mere beginner, then you can trust this guy and put your time into his content.",
              name: "Malik Haziq",
              role: "Web Developer",
            },
            {
              quote:
                "For everyone who wants to level up their coding and dev skills — both basic and advanced stacks are covered and most of the content is free.",
              name: "Ali Haider",
              role: "Web Developer",
            },
          ].map((t) => (
            <AnimatedSection
              key={t.name}
              className="rounded-2xl bg-white border border-light-gray p-6 shadow-card"
            >
              <div className="text-4xl text-sub mb-2">“</div>
              <p className="text-sub-para mb-4">{t.quote}</p>
              <div className="text-para">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm">{t.role}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
