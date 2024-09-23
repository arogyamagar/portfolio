import uniqid from "uniqid";
import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import LanguageIcon from "@mui/icons-material/Language";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
        target="_blank"
      >
        <GitHubIcon />
      </a>
    )}

    {project.website && (
      <a
        href={project.website}
        aria-label="website"
        className="link link--icon"
        target="_blank"
      >
        <LanguageIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
        target="_blank"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

ProjectContainer.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    website: PropTypes.string,
    livePreview: PropTypes.string,
  }).isRequired,
};

export default ProjectContainer;
