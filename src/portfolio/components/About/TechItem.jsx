export function TechItem({ techName, techSrc, labelHidden = false }) {
  return (
    <span className="bg-light-primary dark:bg-dark-primary border-light-tertiary dark:border-dark-tertiary hover:shadow-[0_0_10px_2px_rgb(0,0,0,0.3)] hover:shadow-light-tertiary hover:dark:shadow-dark-tertiary p-3 m-2 rounded-3xl border-8 space-y-2 hover:scale-[1.1]">
      <img
        className="size-16 xs:size-20 rounded-2xl"
        src={techSrc}
        alt=""
        onDragStart={(e) => {
          e.preventDefault();
        }}
      />
      <div
        className={
          "text-sm xs:text-base text-center font-bold" +
          (labelHidden ? " hidden" : "")
        }
      >
        {techName}
      </div>
    </span>
  );
}
