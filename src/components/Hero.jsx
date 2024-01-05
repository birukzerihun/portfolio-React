import Navbar from "./Navbar";

function Hero() {
  return (
    <div id="home">
      <Navbar />
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">Front-End React Developer 👋🏽</h1>
            <p className="hero-description">
              Hi, I'm Biruk Zerihun. A passionate Front-end React Developer
              based in Ethiopia, Addis Ababa. 📍
            </p>
            <span>
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                href="www.linkedin.com/in/biruk-zerihun"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/birukzerihun"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </span>
          </div>
          <div className="hero-img-box">
            <img src="imgs/me.jpg" className="hero-img" alt="Biruk Image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
