import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <section className="resume">
      <div className="profile-details">
        <div className="profile-picture__wrapper">
          <img src="images/testimony.png" alt="profile-picture" />
        </div>
        <div className="heading">
          <h1 className="capitalize">Ekomobong Saturday</h1>
          <p> Dopemu, Agege, Lagos State.</p>
          <p>Tel: 08105653751</p>
        </div>
        <div className="profile-detail">
          <div className="about-me">
            <div className="description">
              <div className="description-icons">
                <span className=""></span>
              </div>
              <div className="description-content">
                <h2 className="description-title capitalize">
                  CAREER OBJECTIVES:
                </h2>
                <p className="obj">
                  To pursue and build an enviable career in an establishment
                  through hard work, excellent performance, transparency,
                  honesty and deep sense of commitment with quality service and
                  to contribute my best to the growth of the organization.
                </p>
                <br />
                <br />
                <div className="datas">
                  <h2>BIO DATA:</h2>
                  <p>
                    <span className="bold">State Of Origin:</span>
                    Akwa-Ibom State
                  </p>
                  <p>
                    <span className="bold">Local Govt. Area:</span>
                    Oruk-Anam L.G.A
                  </p>
                  <p>
                    <span className="bold">Nationality:</span>
                    Oruk-Anam L.G.A
                  </p>
                  <p>
                    <span className="bold">Sex:</span>
                    Female
                  </p>
                  <p>
                    <span className="bold">Marital Status:</span>
                    Single
                  </p>
                  <p>
                    <span className="bold">Religion:</span>
                    Christian
                  </p>
                  <p>
                    <span className="bold">Date Of Birth:</span>
                    20th September 1995.
                  </p>
                </div>
                <br />
                <h2>PERSONAL PROFILE:</h2>
                <ul>
                  <li>Problem solving ability. </li>
                  <li>Abilty to meet target and challenges.</li>
                  <li>Ability to adjust to changes.</li>
                  <li>
                    Good interpersonal skills and ability to work efficently in
                    team.
                  </li>
                  <li>Ability to learn fast with little or no supervision.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="description">
              <div className="description-icons">
                {/* <FontAwesomeIcon
                  className="description-icon icon"
                  icon={["fa", "user-tie"]}
                /> */}

                <span className="description-icon icon"></span>
              </div>
              <div className="description-content">
                <h2 className="description-title capitalize">
                  EDUCATIONAL BACKGROUND:
                </h2>
                <div className="datas">
                  <p>
                    <span>Blessed Ave Maria Schools, Igando.</span>
                    2008-2013
                  </p>
                  <p>West Africa Secondary School Certificate(WASSCE)</p>
                  <br />
                  <br />
                  <p>
                    <span>St. Saviour Nursury and Primary School</span>
                    2001-2007
                  </p>
                  <p>Frist School Leaving Certificate(FSLC)</p>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="projects">
            <div className="description">
              <div className="description-icons"></div>
              <div className="description-content">
                <h2 className="description-title capitalize">
                  WORKING EXPERIENCE WITH DATE:
                </h2>
                <div className="datas">
                  <p>
                    <span>Deykoyklem Nig. Enterprises</span> 2018
                  </p>
                  <p>Office Assistance</p>
                  <p>
                    <span>Tender Hands Nur/Pry School</span> 2016
                  </p>
                  <p>Teacher</p>
                  <p>
                    <span>BB Salon</span> 2014
                  </p>
                  <p>Stylist</p>
                </div>
              </div>
              <div className="description-icons"></div>
              <div className="description-content">
                <h2 className="description-title capitalize">HOBBIES </h2>

                <p> Singing and Reading</p>
              </div>
              <div className="description-icons"></div>
              <div className="description-content">
                <h2 className="description-title capitalize">REFEREES </h2>

                <p>
                  <span>Mr. Matthew Itohowo</span>
                </p>
                <p>Tel: 07038231196</p>
                <p>
                  <span>Mr. Udofia</span>
                </p>
                <p>Tel: 08039697562</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //? My Resume
    // <section className="resume">
    //   <div className="profile-details">
    //     <div className="profile-picture__wrapper">
    //       <img src="images/richard-saturday.jpg" alt="profile-picture" />
    //     </div>
    //     <div className="heading">
    //       <h1 className="capitalize">Richard Saturday</h1>
    //       <p> Dopemu, Agege, Lagos State.</p>
    //       <p>Tel: 09035034329</p>
    //     </div>
    //     <div className="profile-detail">
    //       <div className="about-me">
    //         <div className="description">
    //           <div className="description-icons">
    //             <span className=""></span>
    //           </div>
    //           <div className="description-content">
    //             <h2 className="description-title capitalize">
    //               CAREER OBJECTIVES:
    //             </h2>
    //             <p className="obj">
    //               To pursue and build an enviable career in an establishment
    //               through hard work, excellent performace, transparency, honesty
    //               and deep sense of commitment with quality service and to
    //               contribute my best to the growth of the organization.
    //             </p>
    //             <br />
    //             <br />
    //             <div className="datas">
    //               <h2>BIO DATA:</h2>
    //               <p>
    //                 <span className="bold">State Of Origin:</span>
    //                 Akwa-Ibom State
    //               </p>
    //               <p>
    //                 <span className="bold">Local Govt. Area:</span>
    //                 Oruk-Anam L.G.A
    //               </p>
    //               <p>
    //                 <span className="bold">Nationality:</span>
    //                 Oruk-Anam L.G.A
    //               </p>
    //               <p>
    //                 <span className="bold">Sex:</span>
    //                 Male
    //               </p>
    //               <p>
    //                 <span className="bold">Marital Status:</span>
    //                 Single
    //               </p>
    //               <p>
    //                 <span className="bold">Religion:</span>
    //                 Christian
    //               </p>
    //               <p>
    //                 <span className="bold">Date Of Birth:</span>
    //                 21st June 1999.
    //               </p>
    //             </div>
    //             <br />
    //             <h2>PERSONAL PROFILE:</h2>
    //             <ul>
    //               <li>Problem solving ability. </li>
    //               <li>Abilty to meet target and challenges.</li>
    //               <li>Ability to adjust to changes.</li>
    //               <li>
    //                 Good interpersonal skills and ability to work efficently in
    //                 team.
    //               </li>
    //               <li>Ability to learn fast with little or no supervision.</li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="experience">
    //         <div className="description">
    //           <div className="description-icons">
    //             {/* <FontAwesomeIcon
    //               className="description-icon icon"
    //               icon={["fa", "user-tie"]}
    //             /> */}

    //             <span className="description-icon icon"></span>
    //           </div>
    //           <div className="description-content">
    //             <h2 className="description-title capitalize">
    //               SCHOOL ATTENTED WITH DATE:
    //             </h2>
    //             <div className="datas">
    //               <p>
    //                 <span>State Senior High School Oyewole, Lagos State.</span>{" "}
    //                 2012-2018
    //               </p>
    //               <p>West Africa Secondary School Certificate(WASSCE)</p>
    //               <br />
    //               <br />
    //               <p>
    //                 <span>Stevens Oluyemi Nursery and Primary School</span>
    //                 2006-2012
    //               </p>
    //               <p>Frist School Leaving Certificate(FSLC)</p>
    //             </div>
    //             <br />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="projects">
    //         <div className="description">
    //           <div className="description-icons"></div>
    //           <div className="description-content">
    //             <h2 className="description-title capitalize">
    //               WORKING EXPERIENCE WITH DATE:
    //             </h2>
    //             <div className="datas">
    //               <p>
    //                 {" "}
    //                 <span>Buchi Oil and Gas</span> 2018-2021{" "}
    //               </p>
    //               <p>Apprentice</p>
    //             </div>
    //           </div>
    //           <div className="description-icons"></div>
    //           <div className="description-content">
    //             <h2 className="description-title capitalize">HOBBIES </h2>

    //             <p> Singing, Reading and Travelling</p>
    //           </div>
    //           <div className="description-icons"></div>
    //           <div className="description-content">
    //             <h2 className="description-title capitalize">REFEREES </h2>

    //             <p>
    //               {" "}
    //               <span>Mr. Matthew Itohowo</span>
    //             </p>
    //             <p>Tel: 07038231196</p>
    //             <p>
    //               {" "}
    //               <span>Mrs. Udofia Sunday</span>
    //             </p>
    //             <p>Tel: 07086316515</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Resume;
