import "./index.css";
import picture1 from "../../assets/images/IMG_0812.JPG";
import picture2 from "../../assets/images/1Y6A8185 - Copy.png";
import picture3 from "../../assets/images/UIUC 2022.png";
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
          <img src={picture1} className="frank-picture hover-effect" alt="Frank"></img>
        </div>
      </div>

      <div className="ad experience">
        <h1>Additional Experience:</h1>
        <div className="additional-experience px-2">
          <p>
            In addition to my academic and professional pursuits, I have
            developed a strong passion for multimedia production and content
            creation. My skills in this area include:
          </p>
          <ul>
            <li>
              <strong>Multimedia Production:</strong> Proficient in <strong>Davinci
              Resolve</strong> for video editing, color grading, and using its Fusion
              feature for visual effects. Skilled in <strong>Adobe Photoshop</strong> and
              Lightroom for graphic design and photo editing.
            </li>
            <li>
              <strong>Content Creation:</strong> Engaged in freelance video
              production and photography, combining technical skills with
              creativity to produce compelling visual content.
            </li>
          </ul>
        </div>
        <div className="media-showcase">
          <div className="col-md-6 photo-showcase">
            <h3 className="description-1 text-center py-4">Commercial Photography:</h3>
            <img src={picture2} className="picture2 img-fluid hover-effect" alt="Commercial Photography" />
          </div>
          <div className="col-md-6 video-showcase">
    <h3 className="description-2 text-center py-4">Video Production:</h3>
    <a href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0">
        <img src={picture3} className="picture3 img-fluid hover-effect" alt="Video Editing" />
    </a>
    <br></br>
    <br></br>
    <a href="https://www.bilibili.com/video/BV1je411j7SY/?vd_source=29129ec6466690e99722869f8f8689c0" className="video-link ">
        University of Illinois Urbana-Champaign 
    </a>
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
