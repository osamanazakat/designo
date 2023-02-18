import "./contact-form.scss";
import Button from "../button/button";

const ContactForm = () => {
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Your Message" />
            <Button className="white" text="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
