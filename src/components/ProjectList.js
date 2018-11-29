import React, { Component } from "react";
import { Link } from "react-router-dom";

import projectArray from "../projects.json";

function projectUrl(oneProject) {
  // return the URL with the project's ID
  return `/projects/${oneProject.id}`;
}


class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projectArray,
    };
  }

  render() {
    const { projects } = this.state;

    return (
      <section className="ProjectList">
        <h2>Project List</h2>

        <ul>
          {projects.map(oneProject => {
            return (
              // use IDs for the key when available
              <li key={oneProject.id}>
                <h3>
                  <Link to={projectUrl(oneProject)}>
                    {oneProject.name}
                  </Link>
                </h3>
                <p>Technologies: {oneProject.technologies}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ProjectList;
