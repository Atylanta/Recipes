import React from 'react';
import '../css/project-list.css'

const ProjectSummary = () => {
    return (
        <div className="margin-elem">
            <div className='bordered-recipe'>
                <span className="projectTitle">Project Title</span>
                <p>Posted by NN</p>
                <p className='dateStyles'>17 April 2019 </p>
            </div>
        </div>
    )
};

export default ProjectSummary;

