export function TechItem({ techName, techSrc, labelHidden = false }) {
  return (
    <span className="bg-light-primary dark:bg-dark-primary border-light-green dark:border-dark-green hover:shadow-green-shade hover:dark:shadow-green-glow p-3 m-2 rounded-3xl border-4 space-y-2 hover:scale-[1.1]">
      <img
        className="size-14 rounded-2xl"
        src={techSrc}
        alt=""
        onDragStart={(e) => {
          e.preventDefault();
        }}
      />
      <div
        className={
          "text-xs text-center font-bold" +
          (labelHidden ? " hidden" : "")
        }
      >
        {techName}
      </div>
    </span>
  );
}
