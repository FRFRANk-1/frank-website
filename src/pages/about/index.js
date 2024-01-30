import "./index.css";
import { Link } from "react-router-dom";
import picture1 from "../../assets/images/Frank_1.png";
import picture2 from "../../assets/images/1Y6A8185 - Copy.png";
// import picture3 from "../../assets/images/UIUC 2022.png";
import picture4 from "../../assets/images/UI_UX_Genz.png";
import picture5 from "../../assets/images/NEU_Collab.jpg";
import picture6 from "../../assets/images/Harvard_2023_Pictures_1.png";
function about() {
  const email = "rlifrank18@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/runcheng-li-1b9748205/";

  return (
    <div className="container py-5">
      <h1 className="intro-1 pt-3 ">Hi, I am Frank!</h1>
      <div className="content">
        <div className="text-content">
          <p className="intro-2">
            <p className="Background">Background:</p>I am a motivated graduate
            student in Computer Science at Northeastern University, known for my
            passion for learning and ability to quickly acquire new skills. I
            excel at prioritizing and completing tasks, a skill that has been
            honed through my academic journey and work experience.<br></br>{" "}
            <br></br>I hold a bachelor's degree in Mechanical Engineering from
            the University of Rhode Island. My professional background includes
            an internship in the Computer Numerical Control (CNC) industry,
            where I worked as a Mechanical/Manufacturing Engineer Intern. This
            experience highlighted the impact of computer software programming
            on productivity across various domains. Inspired by this, I pursued
            a field of study in Computer Science to enhance my skills and
            experiences, aiming to apply them effectively in my future career.
          </p>
        </div>
        <div className="image-content">
          <img
            src={picture1}
            className="frank-picture hover-effect"
            alt="Frank"
          ></img>
        </div>
      </div>

      <div className="ad experience">
        <h1>Professional Experience:</h1>
        <div className="additional-experience px-2">
          <p>
            Beyond my academic and professional achievements, I have cultivated
            a robust expertise in multimedia production and content creation.
            This includes:
          </p>
          <ul>
            <li>
              <strong>Full-Stack Web Development:</strong> (NEU Project Search
              Website - Collab) <br></br>
              Designed and developed a full-stack website with React and
              MongoDB. Integrated Figma mockups, implemented CRUD operations,
              and tailored user access controls for project management and
              profile customization.
            </li>
            <br></br>
            <li>
              <strong>UI/UX Design:</strong> (Travel app - Genz)<br></br>Crafted
              a Figma-based UI/UX design for a travel planning app, focusing on
              user experience with a clean layout for search, booking, and user
              profiles. Prioritized intuitive navigation and aesthetic appeal to
              streamline travel planning.
            </li>
            <br></br>
            <li>
              <strong>Photography & Video Shooting:</strong> (Commercial product
              photographer, Event videographer, etc) <br></br>Active in
              freelance projects, combine technical acumen with artistic
              creativity to produce visually captivating content, ranging from
              commercial videography to lifestyle photography.
            </li>
            <br></br>
            <li>
              <strong>Media Production:</strong> (After Effect Production){" "}
              <br></br> Advanced proficiency in <strong>Davinci Resolve</strong>{" "}
              for comprehensive video editing, color grading, and visual effects
              using its Fusion feature. Adept in{" "}
              <strong>Adobe Photoshop</strong> and <strong>Lightroom</strong>{" "}
              for high-end graphic design and photo editing, contributing to
              enhanced visual storytelling and brand presentation.
            </li>
          </ul>
        </div>
        <div className="media-showcase">
          <div className="col-md-10 photo-showcase">
            <h1 className="description-1 text-center py-4">
              NEU Project Search Website:
            </h1>

            <a href="https://neu-colab.netlify.app/" className="photo-link">
              <div className="image-group">
                <img
                  src={picture5}
                  className="picture5 img-fluid hover-effect"
                  alt="NEU Project Search Website"
                />
              </div>
            </a>

            <a href="https://neu-colab.netlify.app/" className="photo-link">
              {" "}
              <h4>NEU Collab</h4>
            </a>

            <div className="col-md-12 uiux-showcase">
              <h1 className="description-3 text-center py-4">UI/UX Design:</h1>
              <a href="https://www.figma.com/proto/4FMI12FC37jIkLMuHQ5aLA/Travel-App?node-id=244-761&scaling=scale-down&page-id=244%3A719&starting-point-node-id=244%3A761">
                <img
                  src={picture4}
                  className="picture4 img-fluid hover-effect"
                  alt="UI/UX Design"
                />
              </a>
              <br></br>
              <br></br>
              <a
                href="https://www.figma.com/proto/4FMI12FC37jIkLMuHQ5aLA/Travel-App?node-id=244-761&scaling=scale-down&page-id=244%3A719&starting-point-node-id=244%3A761"
                className="uiux-link text-center py-4"
              >
                <h4>Travel Planning App - GenZ</h4>
              </a>
            </div>

            <h1 className="description-1 text-center py-4">
              Commercial Photography:
            </h1>
            {/* <img
              src={picture2}
              className="picture2 img-fluid hover-effect"
              alt="Commercial Photography"
            />
            <br></br>
            <br></br> */}

            <img
              src={picture6}
              className="picture6 img-fluid hover-effect py-5"
              alt="Commercial Photography"
            />

            <Link
              to="/PhotographyPortfolio"
              className="Photo Portfolio link text-center py-4 "
            >
              <h2>Frank's Photography Portfolio</h2>
            </Link>

            <div className="col-md-12 video-showcase text-center">
              <h1 className="description-2 text-center py-4">
                Professional Video Production:
              </h1>
              {/* <a href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0">
                <img
                  src={picture3}
                  className="picture3 img-fluid hover-effect"
                  alt="Video Editing"
                />
              </a> */}
              <br></br>
              <br></br>

              <div className="video-showcase-wedding responsive-iframe-container">
              <iframe
                  title="FL-Video"
                  src="//player.bilibili.com/player.html?aid=751814264&bvid=BV1nk4y1S7KT&cid=1419434134&p=1"
                  allowFullScreen
                ></iframe>
              </div>
              <a href="https://www.bilibili.com/video/BV1nk4y1S7KT/?vd_source=29129ec6466690e99722869f8f8689c0" className="video-link_wedding">
                <h4 className="video-descrip py-4">Boston Wedding, Cambridge 2024</h4>
              </a>


              <div className="video-showcase-uiuc responsive-iframe-container">
                <iframe
                  title="UIUC-Campus Tour"
                  src="//player.bilibili.com/player.html?aid=261204747&bvid=BV1je411j7SY&cid=874049816&p=1"
                  scrolling="no"
                  border="0"
                  frameborder="no"
                  framespacing="0"
                  allowfullscreen="true"
                >
                  {" "}
                </iframe>
              </div>
              <a
                href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0"
                className="video-link_uiuc "
              >
                <h4 className="video-descrip py-4">
                  University of Illinois Urbana-Champaign
                </h4>
              </a>
              <br></br>
              <br></br>
              {/* <div className="video-showcase-FL responsive-iframe-container">
                <iframe
                  title="FL-Video"
                  src="//player.bilibili.com/player.html?aid=825543064&bvid=BV1Wg4y1L7zJ&cid=1114529437&p=1"
                  scrolling="no"
                  border="0"
                  frameborder="no"
                  framespacing="0"
                  allowfullscreen="true"
                >
                  {" "}
                </iframe>
              </div>
              <a
                href="https://www.bilibili.com/video/BV1Wg4y1L7zJ/?vd_source=29129ec6466690e99722869f8f8689c0"
                className="video-link_FL"
              >
                <h4 className="video-descrip py-4">Florida-Key West</h4>
              </a>
            </div> */}
            </div>
            <Link
              to="/VideoProductionPortfolio"
              className="VideoProductionPortfolio link text-center py-4 "
            >
              <h3>Frank's Video Production Portfolio</h3>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="intro-3">Contact:</h2>
      <div className="intro-group-1">
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          Linkedin: <a href={linkedinUrl}>{linkedinUrl}</a>
        </p>
      </div>
    </div>
  );
}

export default about;
