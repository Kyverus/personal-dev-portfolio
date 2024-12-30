import React from "react";
import { IoMdAlert } from "react-icons/io";

export function sendAlert(message) {
  const alert = document.getElementById("custom-alert-message");

  showAlert();
  setTimeout(() => {
    animateOpen();
    alert.innerHTML = message;
  }, 1); //delay for unsetting hidden before animation

  setTimeout(() => {
    animateClose();
    setTimeout(() => {
      closeAlert();
      alert.innerHTML = "";
    }, 500); //delay for closing animation
  }, 1500); //delay before closing
}

function showAlert() {
  const alert = document.getElementById("custom-alert");
  alert.classList.remove("hidden");
}

function closeAlert() {
  const alert = document.getElementById("custom-alert");
  alert.classList.add("hidden");
}

function animateClose() {
  const alert = document.getElementById("custom-alert");
  alert.classList.remove("scale-y-100");
  alert.classList.add("scale-y-0");
}
function animateOpen() {
  const alert = document.getElementById("custom-alert");
  alert.classList.remove("scale-y-0");
  alert.classList.add("scale-y-100");
}

export function Alert() {
  return (
    <div className="relative w-full bg-red-300">
      <div
        id="custom-alert"
        className="w-full absolute hidden origin-top scale-y-0 transition-all duration-500 rounded-md bg-dark-green dark:bg-light-green px-4 translate-y-4"
      >
        <div className="h-12 space-x-2 flex items-center">
          <IoMdAlert className="size-8 text-light-green dark:text-dark-green" />
          <div
            id="custom-alert-message"
            className="text-light-primary dark:text-dark-primary"
          ></div>
        </div>
      </div>
    </div>
  );
}
