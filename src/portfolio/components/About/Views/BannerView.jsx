export function BannerView({ className, children }) {
  return (
    <div
      className={
        "banner-view xl:min-h-[250px] flex flex-col bg-white dark:bg-dark-secondary p-4 gap-4 shadow-black-shade" +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}
