export function BannerTitle({ className, children }) {
  return (
    <div
      className={
        "text-2xl md:text-3xl font-bold text-dark-green dark:text-light-green" +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}
