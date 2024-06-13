import Skills from "./Skills";

function About() {
  return (
    <div id="about">
      <Skills />
      <section className="section-about">
        <div className="about">
          <div className="about-img-box">
            <img
              className="work-img"
              src="imgs/some-one-coding.jpg"
              alt="some-one-coding"
            />
            <img
              className="work-emoji"
              src="imgs/working-emoji.png"
              alt="emoji"
            />
            <span>
              <img src="imgs/circle4.png" alt="text" />
            </span>
          </div>
          <div className="about-text-box">
            <h3>About me</h3>
            <h4>
              A dedicated Full-Stack Developer <br />
              based in Ethiopia, Addis Ababa 📍
            </h4>
            <p>
              As a Junior Full-Stack Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Nodejs,Express and
              Mongodb. I excel in designing and maintaining responsive websites
              that offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.
              I am also a team player who thrives in collaborating with
              cross-functional teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
