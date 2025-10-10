import { useEffect, useMemo, useRef, useState } from "react";
import AnimatedSection from "@components/AnimatedSection/AnimatedSection";

export default function TestimonialsSlider() {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "I can't express how grateful I am. If you're a beginner, this content is perfect to start with confidence.",
        name: "Malik Haziq",
        role: "Web Developer",
      },
      {
        quote:
          "Clear explanations and practical projects helped me switch careers. Highly recommended!",
        name: "Ayesha Khan",
        role: "Frontend Engineer",
      },
      {
        quote:
          "The best free resource I've used. Concepts click because examples are real world.",
        name: "Bilal Ahmed",
        role: "Full‑stack Developer",
      },
      {
        quote:
          "Loved the structure and pacing. I built two portfolio apps while following along.",
        name: "Sana Raza",
        role: "Junior Developer",
      },
      {
        quote:
          "Great depth without overwhelming. The community and materials are top notch.",
        name: "Usman Ali",
        role: "Software Engineer",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    // Auto-slide disabled
    return () => clearInterval(timer.current);
  }, [testimonials.length]);

  const goTo = (i) => setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <AnimatedSection className="section mb-32">
      <h2 className="h2 text-center center-orange-line mb-8">Testimonials</h2>
      <div
        className="relative overflow-hidden rounded-2xl border border-light-gray bg-white shadow-card"
      >
        <div
          className="flex"
          style={{ transform: `translateX(-${(index * 100) / testimonials.length}%)`, width: `${testimonials.length * 100}%`, willChange: "transform" }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-6 py-8 md:px-10 md:py-10" style={{ width: `${100 / testimonials.length}%` }}>
              <div className="max-w-3xl mx-auto">
                <div className="text-5xl text-sub mb-3">“</div>
                <p className="text-sub-para text-lg md:text-xl mb-5 leading-relaxed">{t.quote}</p>
                <div className="text-para">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          aria-label="Previous testimonial"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-light-gray rounded-full w-10 h-10 flex items-center justify-center shadow-card"
        >
          ‹
        </button>
        <button
          aria-label="Next testimonial"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-light-gray rounded-full w-10 h-10 flex items-center justify-center shadow-card"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 py-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "bg-main w-6" : "bg-sub w-2.5"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
