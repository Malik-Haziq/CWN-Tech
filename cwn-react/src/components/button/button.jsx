import "../../css/index.css";

export default function Button({
  href = "",
  text,
  styles = "",
  children,
  ...rest
}) {
  return (
    <a
      href={href}
      className={`cursor-pointer bg-main px-6 py-3 font-semibold text-white text-base sm:text-xl rounded-lg duration-500 hover:bg-main-tint focus:bg-main-shade ${styles}`}
      {...rest}
    >
      {children ?? text}
    </a>
  );
}
