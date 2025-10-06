export default function AnimatedSection({
  children,
  className = "",
  animation = "animate-fade-up",
  as = "section",
  delay = 0,
  style = {},
  ...props
}) {
  const Tag = as;

  return (
    <Tag className={className} style={style} {...props}>
      {children}
    </Tag>
  );
}
