import "./index.css";
import picture1 from "../../assets/images/IMG_0812.JPG";
import picture2 from "../../assets/images/1Y6A8185 - Copy.png";
import picture3 from "../../assets/images/UIUC 2022.png";
import picture4 from "../../assets/images/UI_UX_Genz.png";
import picture5 from "../../assets/images/NEU_Collab.jpg";
function about() {
  const email = "rlifrank18@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/runcheng-li-1b9748205/";

  return (
    <div className="container ">
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
            
            <h3 className="description-1 text-center py-4">
              NEU Project Search Website:
            </h3>
            <a href="https://neu-colab.netlify.app/" className="photo-link">
            
            <img
              src={picture5}
              className="picture5 img-fluid hover-effect"
              alt="NEU Project Search Website"
            />
            </a>
            
            <a href="https://neu-colab.netlify.app/" className="photo-link"> NEU Collab
            </a>

            <div className="col-md-12 uiux-showcase">
              <h3 className="description-3 text-center py-4">UI/UX Design:</h3>
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
                className="uiux-link"
              >
                Travel Planning App - GenZ
              </a>
            </div>
          
            
            <h3 className="description-1 text-center py-4">
              Commercial Photography:
            </h3>
            <img
              src={picture2}
              className="picture2 img-fluid hover-effect"
              alt="Commercial Photography"
            />
          
          <div className="col-md-12 video-showcase">
            <h3 className="description-2 text-center py-4">
              Video Production:
            </h3>
            <a href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0">
              <img
                src={picture3}
                className="picture3 img-fluid hover-effect"
                alt="Video Editing"
              />
            </a>
            <br></br>
            <br></br>
            <a
              href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0"
              className="video-link "
            >
              University of Illinois Urbana-Champaign
            </a>
            </div>
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
