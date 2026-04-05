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
        "rounded-md px-3 py-2 md:text-lg block md:inline font-medium" +
        (className
          ? " " + className
          : " hover:text-dark-green hover:brightness-200")
      }
      onClick={onClick}
      download={download}
      target={target}
    >
      {children}
    </a>
  );
}
