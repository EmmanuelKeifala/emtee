import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="prop-image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link == "https://em-tech-rzdb.vercel.app/" && (
            <p>
              <a target="_blank" href="https://em-tech-rzdb.vercel.app/">
                Demo
              </a>
            </p>
          )}
        </div>
      </div>
    </Col>
  );
};
