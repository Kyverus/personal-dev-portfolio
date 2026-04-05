export function ResponsiveText({ className, children }) {
  return (
    <div className={"" + (className ? " " + className : "")}>{children}</div>
  );
}
