import React from 'react';
import '../css/project-list.css'
import ProjectSummary from "./projectSummary";
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="projectList">
            { projects && projects.map(project => {
                return(
                    <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
};

export default ProjectList;