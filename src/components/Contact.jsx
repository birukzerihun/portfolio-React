import Footer from "./Footer";

function Contact() {
  return (
    <>
      <section id="contact" className="section-contact">
        <div className="contact">
          <h3>Contact</h3>
          <h4>Don't be shy! Hit me up! 👇</h4>
          <div className="contact-info">
            <div className="location">
              <ion-icon
                name="location-outline"
                className="contact-icon"
              ></ion-icon>
              <p>
                Location <span>Ethiopia, Addis Ababa</span>
              </p>
            </div>

            <div className="mail">
              <ion-icon
                name="mail-unread-outline"
                className="contact-icon"
              ></ion-icon>
              <p>
                Mail <span>birukz516@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
