import "./contact-form.scss";
import { useState } from "react";
import Button from "../button/button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    // This is the mock email sender
    console.log("Submitting message...");

    // Set a timeout of 5 seconds
    const timeout = setTimeout(() => {
      console.error("Error: Took too long to submit the message");
    }, 5000);

    // Simulate submitting the message
    setTimeout(() => {
      console.log("Mock email sent with the following message:", messageBody);

      // Clear the form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Clear the timeout
      clearTimeout(timeout);
    }, 2000);
  };

  return (
    <section className="contact">
      <div className="contact__container container">
        <div className="contact__left">
          <h1 className="contact__heading">Contact Us</h1>
          <p className="contact__p">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="contact__right">
          <form className="contact__form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={handleSubmit} className="white" text="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
