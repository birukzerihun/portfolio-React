function Projects() {
  return (
    <section id="projects" className="section-projects">
      <div className="projects">
        <div className="projects-heading">
          <h3>Portfolio</h3>
          <h4>Each project is a unique piece of development 🧩</h4>
        </div>
        <div className="project">
          <a href="https://eat-then-split.netlify.app/">
            <div className="project-img-box">
              <img className="project-img" src="imgs/eat n split.png" alt="" />
            </div>
          </a>
          <div className="project-text-box">
            <h3>Eat n Split (Februwary 2023) 💵</h3>
            <p>
              Eat n Split is a user-friendly app designed to simplify bill
              splitting among friends dining together. Launched in February
              2023, it features a sleek interface and intuitive design, making
              group dining experiences hassle-free and enjoyable.
            </p>
            <div className="tech">
              <p>React</p>
              <p>SSCS</p>
            </div>
            <div className="see">
              <a href="https://github.com/birukzerihun/eat-n-split">
                <div className="watch">
                  <p>code</p>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </a>
              <a href=" https://eat-then-split.netlify.app">
                <div className="watch">
                  <p>Live Demo</p>
                  <span>
                    <ion-icon name="log-out-outline"></ion-icon>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-text-box">
            <h3>World Wise (Februwary 2023) 💵</h3>
            <p>
              World Wise is an app that allows users to save and document the
              places they visit on a map. Launched in February 2023, it features
              an intuitive interface for easy tracking and sharing of travel
              experiences, making it perfect for avid travelers.
            </p>
            <div className="tech">
              <p>React</p>
              <p>SSCS</p>
            </div>
            <div className="see">
              <a href="https://github.com/birukzerihun/worldwise">
                <div className="watch">
                  <p>code</p>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </a>
              <a href="https://the-world-wise.netlify.app">
                <div className="watch">
                  <p>Live Demo</p>
                  <span>
                    <ion-icon name="log-out-outline"></ion-icon>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <a href="https://the-world-wise.netlify.app/">
            <div className="project-img-box">
              <img
                className="project-img"
                src="imgs/worldwise.png"
                alt="worldwise"
              />
            </div>
          </a>
        </div>

        <div className="project">
          <a href="https://the-biruk-react-pizza.netlify.app/">
            <div className="project-img-box">
              <img
                className="project-img"
                src="imgs/react-pizza.png"
                alt="worldwise"
              />
            </div>
          </a>
          <div className="project-text-box">
            <h3>Fast React Pizza (Februwary 2023) 💵</h3>
            <p>
              Fast React Pizza is an app that elevates the dining experience by
              allowing users to register, explore pizza menus, and place orders
              easily. Launched in February 2023, it features an intuitive
              platform designed for seamless and enjoyable pizza ordering.
            </p>
            <div className="tech">
              <p>React</p>
              <p>SSCS</p>
            </div>
            <div className="see">
              <a href="https://github.com/birukzerihun/fast-react-pizza">
                <div className="watch">
                  <p>code</p>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </a>
              <a href="https://the-biruk-react-pizza.netlify.app">
                <div className="watch">
                  <p>Live Demo</p>
                  <span>
                    <ion-icon name="log-out-outline"></ion-icon>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
