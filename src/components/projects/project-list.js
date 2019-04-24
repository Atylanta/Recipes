import React from 'react';
import '../css/project-list.css'
import ProjectSummary from "./projectSummary";

const ProjectList = () => {
    return (
        <div className="projectList">
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>

        </div>
    )
};

export default ProjectList;