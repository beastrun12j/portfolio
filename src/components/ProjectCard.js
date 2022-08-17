import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, url, imgUrl }) => {
  return (
    <Col size={12} sm={8} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
            <a
              href={url}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Project Link
            </a>
          </span>
        </div>
      </div>
    </Col>
  );
};
