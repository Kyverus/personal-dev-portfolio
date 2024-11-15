export function CustomLink({
  path,
  children,
  onClick,
  download,
  target,
  className,
}) {
  return (
    <a
      href={path}
      className={
        "rounded-md px-3 py-2 md:text-lg block md:inline text-dark-2 hover:text-black dark:text-light-2 dark:hover:text-white" +
        (className ? " " + className : " font-medium text-base")
      }
      onClick={onClick}
      download={download}
      target={target}
    >
      {children}
    </a>
  );
}
