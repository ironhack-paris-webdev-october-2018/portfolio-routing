import React, { Component } from "react";
import { Link } from "react-router-dom";

import projectArray from "../projects.json";

function findProject(idFromUrl) {
  // find one project whose ID matches the URL parameter
  return projectArray.find(oneProject => {
    return oneProject.id === idFromUrl;
  });
}


class ProjectDetails extends Component {
  render() {
    // "props.match" is a special prop sent by the React Router
    // (contains information about the matched route)
    const { params } = this.props.match;

    // "params.projectId" is the ID from the URL
    // (the name "projectId" is set in App.js in the URL "/projects/:projectId")
    const projectItem = findProject(params.projectId);

    return (
      <section className="ProjectDetails">
        <h2>Project Details</h2>
        <h3>{projectItem.name} ({projectItem.year})</h3>
        <p>{projectItem.description}</p>

        <h3>Technologies</h3>
        <p>{projectItem.technologies}</p>
        <p>ID: {params.projectId}</p>

        <Link to="/projects">Back to All Projects</Link>
      </section>
    );
  }
}

export default ProjectDetails;
