import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonalCV = () => {
  return (
    <section className="resume-wrapper">
      <aside className="profile">
        <div className="profile-picture__wrapper">
          <img src="images/richard-saturday.jpg" alt="profile-picture" />
        </div>
        <div className="contact">
          <h2>contact me</h2>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={["fab", "whatsapp"]} />
              <span className="text">+2347016577519</span>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={["fa", "phone"]} />

              <span className="text">
                +2349035034329
                <a
                  href="tel:+2349035034329"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </span>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={["far", "envelope"]} />
              <span className="text">
                <a
                  href="mailto:saturdayrichard98@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                devrichard01@gmail.com
              </span>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={["fa", "location-dot"]} />
              <span className="text">Nigeria (Lagos State)</span>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2>social profile</h2>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} />
              <span className="text break-all">
                https://www.linkedin.com/in/richard-saturday-5935121b1/{" "}
              </span>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
              <span className="text">
                <a
                  href="http://github.com/Richeez"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                http://github.com/Richeez
              </span>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2>other info</h2>
          <div className="skills">
            <h3 className="capitalize">skills</h3>
            <div className="skill">
              <ul className="text">
                <li>Full-stack web development</li>
                <li>JavaScript (React)</li>
                <li>HTML5, CSS3</li>
                <li>Node.js, Express.js</li>
                <li>RESTful APIs</li>
                <li>Database design and management (MongoDB)</li>
                <li>Version control (Git)</li>
                <li>Data Management(Context API, Redux-toolkit)</li>
                <li>UI/UX Design</li>
                <li>Deployment and Hosting(Vercel, Netlify) </li>
              </ul>
            </div>
          </div>
          <div className=" skills language">
            <h3 className="capitalize">language</h3>
            <div className="english">
              <p className="text">English (Fluent) </p>
            </div>
          </div>

          <div className=" skills interests">
            <h3 className="capitalize">interest</h3>
            <div className="interest">
              <p className="text">Music, Travelling and Studying </p>
            </div>
          </div>
          <div className=" skills references">
            <h3 className="capitalize">references</h3>
            <div className="reference">
              <p className="text"> Engr. Odesanmi Benjamin</p>
              <p className="text">Founder of WifiBase Networks</p>
              <p className="text">bentouch4uk@yahoo.com</p>
              <p className="text">Supervisor</p>
              <p className="text">07086411958</p>
            </div>
          </div>
        </div>
      </aside>
      <div className="profile-details">
        <div className="heading">
          <h1 className="capitalize">Richard Saturday</h1>
          <p>web and software Developer</p>
        </div>
        <div className="profile-detail">
          <div className="about-me">
            <div className="description">
              <div className="description-icons">
                <FontAwesomeIcon
                  className="description-icon icon"
                  icon={["fa", "image-portrait"]}
                />

                <span className=""></span>
              </div>
              <div className="description-content">
                <h2 className="description-title capitalize">about me</h2>
                <p>
                  Experienced and highly skilled full-stack Developer
                  specialiazing in HTML, CSS3, Javascript, React JS(Front-end),
                  and MongoDB(Back-end) with a strong background in progressive
                  web development and a passion for creating efficient and
                  user-friendly applications. Proven track record of delivering
                  high-quality code on time and within budget. Detail-oriented
                  and resourceful problem-solver with excellent communication
                  and teamwork. Adept at working on both small and large-scale
                  projects.
                </p>
                <br />
                <p>
                  I would appreciate the opportunity to further discuss how my
                  skills and experience can benefits and bring more value to
                  your company in more detail.
                </p>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="description">
              <div className="description-icons">
                <FontAwesomeIcon
                  className="description-icon icon"
                  icon={["fa", "user-tie"]}
                />

                <span className="description-icon icon"></span>
                <div className="timeline">2023 - present</div>
              </div>
              <div className="description-content">
                <h2 className="description-title capitalize">experiences</h2>
                <h3 className="title bold">Postly</h3>
                <p className="title">Web and Mobile Website Developer</p>
                <br />
                <ul>
                  <li>
                    Developed and maintained web applications for communicating
                    with different social media platform right from Postly
                    leveraging APIs provided by each platform using React and
                    Node.js, ensuring optimal performance and user experience.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to gather
                    requirements, design system architecture, and implement new
                    features.
                  </li>
                  <li>
                    Participated in Agile team meetings, contributing ideas and
                    suggestions for process improvement.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="description">
              <div className="description-icons">
                {/* <FontAwesomeIcon
                  className="description-icon icon"
                  icon={["fa", "user-tie"]}
                /> */}

                <span className="description-icon icon"></span>
                <div className="timeline">2023 - present</div>
              </div>
              <div className="description-content">
                {/* <h2 className="description-title capitalize">experience</h2> */}
                <h3 className="title bold">Zadex Media</h3>
                <p className="title">Web and Mobile Website Developer</p>
                <br />
                <ul>
                  <li>
                    Developed and maintained web applications using React and
                    Node.js, ensuring optimal performance and user experience.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to gather
                    requirements, design system architecture, and implement new
                    features.{" "}
                  </li>
                  <li>
                    Participated in Agile team meetings, contributing ideas and
                    suggestions for process improvement.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <br />

            <div className="description">
              <div className="description-icons">
                {/* <FontAwesomeIcon
                  className="description-icon icon"
                  icon={["fa", "user-tie"]}
                /> */}

                <span className="description-icon icon"></span>
                <div className="timeline">2021 - 2022</div>
              </div>
              <div className="description-content">
                <h3 className="title bold">
                  {" "}
                  Software Engineering Intern, Beetos{" "}
                </h3>
                <br />
                <ul>
                  <li>
                    Assisted in the development of a mobile application using
                    React Native, contributing to the design and implementation
                    of core features.
                  </li>
                  <li>
                    Developed and maintained web applications using React and
                    Node.js, ensuring optimal performance and user experience.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to gather
                    requirements, design system architecture, and implement new
                    features.{" "}
                  </li>
                  <li>
                    Participated in Agile team meetings, contributing ideas and
                    suggestions for process improvement.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="projects">
            <div className="title">
              <FontAwesomeIcon
                className="description-icon icon"
                icon={["fa", "project-diagram"]}
              />
              <h2 className="description-title capitalize">projects</h2>
            </div>
            <div className="description">
              <div className="description-icons"></div>
              <ul className="description-content">
                <li className="title bold">Tripleee </li>
                {/* 
                <a href="" target="_blank">
                  Tripleee
                </a> */}
                <p>https://tripleee.vercel.app</p>
                <br />
              </ul>
              <div className="description-icons"></div>
              <div className="description-content">
                <li className="title bold">My Foodies </li>
                {/* <a href="" target="_blank">
                  Recipe App
                </a> */}
                <p>https://my-foodies.netlify.app</p>
              </div>
              <div className="description-icons"></div>
              <div className="description-content">
                <li className="title bold">State Of Chocolate </li>
                {/* <a href="" target="_blank">
                  Coffee Junkies
                </a> */}
                <p>https://state-of-chocolate.vercel.app</p>
              </div>
              <div className="description-icons"></div>
              <div className="description-content">
                <li className="title bold">Movie App </li>
                {/* <a href="" target="_blank">
                  Movie App
                </a> */}
                <p> https://movie-residence.netlify.app</p>
              </div>
              <div className="description-icons"></div>
              <div className="description-content">
                <p className="title bold">Metoyou </p>
                {/* <a href="" target="_blank">
                  TACN - Adealu
                </a> */}
                <p>https://metoyou.vercel.app</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="signature">
          <Canvas draw={draw} />
          <div className="yours__faithfully">
            <p>Richard Saturday</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PersonalCV;
