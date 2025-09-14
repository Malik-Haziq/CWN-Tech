import AnimatedSection from "@components/AnimatedSection/AnimatedSection";

export default function LearningShowcase() {
  const features = [
    {
      icon: "🎓",
      title: "Beginner-Friendly",
      description:
        "Step-by-step courses designed for absolute beginners to start their coding journey.",
    },
    {
      icon: "🚀",
      title: "Advanced Concepts",
      description:
        "Explore advanced topics and frameworks to improve your skills.",
    },
    {
      icon: "🧰",
      title: "Real-World Projects",
      description:
        "Learn by creating real projects and gain hands-on experience.",
    },
    {
      icon: "💸",
      title: "Affordable Pricing",
      description:
        "Get premium courses at prices designed for students and professionals.",
    },
    {
      icon: "📚",
      title: "Comprehensive Resources",
      description:
        "Access templates, documentation, and code snippets to support your learning.",
    },
    {
      icon: "💡",
      title: "Industry Insights",
      description:
        "Stay updated on the latest trends in tech to keep your skills relevant.",
    },
  ];

  const playlistSrc =
    "https://www.youtube-nocookie.com/embed/videoseries?list=PL9WbyKqkuCAYT-IPvo5PxR_hijMuR1RCB";

  return (
    <section className="section mb-32">
      <div className="mb-8">
        <span className="text-sm font-medium text-sub-para">Courses</span>
        <h2 className="h2 mt-1 text-4xl lg:text-5xl">Master Coding with Our Core Offerings</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Features grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <AnimatedSection
                key={item.title}
                delay={idx * 120}
                className="rounded-2xl bg-white border border-light-gray shadow-card p-7 hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 flex min-h-[160px]"
              >
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-main-mint text-2xl flex items-center justify-center">
                    <span aria-hidden>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-sub-heading">{item.title}</h3>
                    <p className="text-sub-para mt-2 text-sm lg:text-base">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Playlist card */}
        <AnimatedSection as="aside" delay={200} className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="rounded-2xl bg-white border border-light-gray shadow-card overflow-hidden">
              <div className="p-5 pb-0">
                <span className="text-sm font-medium text-sub-para">YouTube</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-heading mt-1">Master Coding – Playlist</h3>
                <p className="text-sub-para mt-1 text-sm">Follow along the complete series on our channel.</p>
              </div>
              <div className="relative w-full pt-[56.25%] mt-4">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={playlistSrc}
                  title="YouTube playlist player"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

