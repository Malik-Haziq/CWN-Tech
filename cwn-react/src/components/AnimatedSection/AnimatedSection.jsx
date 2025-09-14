import { useEffect, useRef } from "react";

export default function AnimatedSection({
  children,
  className = "",
  animation = "animate-fade-up",
  as = "section",
  delay = 0,
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove("opacity-0", "translate-y-10");
            node.classList.add(animation);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animation]);

  return (
    <Tag
      ref={ref}
      className={`${className} opacity-0 translate-y-10`}
      style={{ ...style, animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
