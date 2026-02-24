import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";

export function CustomDatePicker({
  label = "Pick a date",
  value,
  onChange,
  className,
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (date) => {
    if (!date) return;
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = date.getFullYear();
    const dateStr = `${mm}/${dd}/${yyyy}`; // return string
    if (onChange) onChange(dateStr);
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={className}
      >
        {value || "None"}
      </button>

      <div
        className={`mt-2 w-96 bg-[#0f2f0f] border border-green-600 rounded p-4 shadow-md text-green-200 ${open ? "" : "hidden"}`}
      >
        <h2 className="text-sm font-semibold mb-2 text-green-400">{label}</h2>

        <DayPicker
          mode="single"
          selected={value}
          onSelect={handleSelect}
          classNames={{
            months: "flex flex-col gap-1",
            month: "p-1",
            caption: "text-sm mb-1 text-green-400",
            day: "p-1 text-xs w-6 h-6 text-green-200 hover:bg-green-700 rounded",
            day_selected: "bg-green-500 text-black rounded",
            day_today: "font-semibold underline decoration-green-500",
            caption_label: "text-green-400",
            nav_button: "text-green-400 hover:text-green-300",
            nav_button_previous: "text-green-400 hover:text-green-300",
            nav_button_next: "text-green-400 hover:text-green-300",
            weekday: "text-green-400 text-xs",
          }}
        />

        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-3 py-1 text-sm bg-green-700 hover:bg-green-600 rounded text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
