const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <div className="img__contact">
          <img src="/assets/contact-image.png" alt="" />
        </div>
        <div className="contact__text">
          <h2>CONTACT US</h2>

          <input placeholder="Your name..." type="text" className="inputs" />
          <input placeholder="Your email..." type="email" className="inputs" />
          <textarea
            placeholder="Your message..."
            className="inputs"
            rows="5"
            id=""
          ></textarea>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
