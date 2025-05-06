import React from "react";
import CallIcon from "./assets/icons/call (1).png";
import EmailIcon from "./assets/icons/email (2).png";
import PinIcon from "./assets/icons/pin.png";

const Contact = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="message flex flex-col items-center">
        <h2 className="text-2xl font-semibold py-2">Get in Touch</h2>
        <p>Ready to learn more or enroll your child? Reach out today!</p>
      </div>
      <div className="contact-info grid grid-cols-3 gap-4 p-8">
        <div className="flex flex-col border py-2 px-4 gap-8 justify-center col-span-1">
          <a href="">
            <img src={CallIcon} alt="" className="contact-icon h-12 p-1" />
          </a>
          <a href="">
            <img src={EmailIcon} alt="" className="contact-icon h-12 p-1" />
          </a>

          <a href="">
            <img src={PinIcon} alt="" className="contact-info h-12 p-1" />
          </a>
        </div>
        <div className="form border p-4 col-span-2">
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Full name.."
              className="border p-2 rounded-xl"
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email.."
              className="border p-2 rounded-xl"
            />

            <textarea
              name="comment"
              id="textarea"
              cols="60"
              rows="8"
              placeholder="Message.."
              className="border p-2 rounded-xl"
            ></textarea>

            <button
              type="submit"
              className="border rounded-2xl w-fit self-center py-2 px-8"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
