export function BannerView({ className, children }) {
  return (
    <div
      className={
        "xl:min-h-[250px] flex flex-col bg-white dark:bg-dark-secondary shadow-green-dark dark:shadow-none p-4 gap-4" +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}
