import { useState } from "react";
import emailjs from "@emailjs/browser";
import { sendAlert } from "./Alert";

export function ContactForm({ className }) {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formDetails.name,
          to_name: "Kirlian",
          from_email: formDetails.email,
          to_email: "kyverusdev@gmail.com",
          message: formDetails.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setFormDetails({ name: "", email: "", message: "" });
          sendAlert("Message successfully sent");
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        sendAlert(error);
      });
  }
  return (
    <div
      className={
        "xl:w-[1280px] mx-auto rounded-xl p-4" +
        (className ? " " + className : "")
      }
    >
      <form
        className="w-full text-lg xs:text-xl flex flex-col space-y-10"
        onSubmit={sendEmail}
      >
        <div className="flex flex-col space-y-3">
          <label
            className="font-semibold text-dark-green dark:text-light-green"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={
              "rounded-md px-4 h-12 bg-transparent border-[1px] border-dark-primary dark:border-light-primary focus:outline-dark-green dark:focus:outline-light-green focus:outline-2 py-1 caret-dark-green dark:caret-light-green"
            }
            required
            placeholder="Firstname / Lastname"
            value={formDetails.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="font-semibold text-dark-green dark:text-light-green"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={
              "rounded-md px-4 h-12 bg-transparent border-[1px] border-dark-primary dark:border-light-primary focus:outline-dark-green dark:focus:outline-light-green focus:outline-2 py-1 caret-dark-green dark:caret-light-green"
            }
            required
            placeholder="Your_email@gmail.com"
            value={formDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="font-semibold text-dark-green dark:text-light-green"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={
              "rounded-md px-4 bg-transparent border-[1px] border-dark-primary dark:border-light-primary focus:outline-dark-green dark:focus:outline-light-green focus:outline-2 py-1 caret-dark-green dark:caret-light-green"
            }
            placeholder="Content here ..."
            value={formDetails.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 w-[400px] h-11 bg-light-green dark:bg-dark-green active:bg-base-cyan dark:active:bg-base-cyan active:text-light-primary dark:active:text-dark-primary active:scale-[1.05] hover:bg-base-green dark:hover:bg-base-green"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
