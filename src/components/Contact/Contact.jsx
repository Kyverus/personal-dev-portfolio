import { useEffect } from "react";
import { Alert } from "./Alert";
import { ContactForm } from "./ContactForm";

export function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    document.querySelectorAll(".contact-form").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".contact-form").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div
      className="min-h-dvh pt-24 pb-8 space-y-8 text-black dark:text-white"
      id="contact"
    >
      <div className="xl:w-[1280px] mx-auto">
        <Alert />
      </div>

      <div className="text-3xl pt-12 font-bold text-center px-2 text-dark-green dark:text-light-green">
        CONTACT
      </div>

      <ContactForm
        className={"contact-form opacity-0 transition-opacity duration-500"}
      />
    </div>
  );
}
