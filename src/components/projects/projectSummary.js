import React from 'react';
import '../css/project-list.css'
import  moment from 'moment';

const ProjectSummary = ({project}) => {

    return (
        <div className="margin-elem" >
            <div className='bordered-recipe'>
                <div className="projectTitle">{project.title}</div>
                <div className='tags'>Tags: {project.tags}</div>
                <span>
                    <p className='postedAndDate'>Posted by {project.authorFirstName + ' ' + project.authorLastName}</p>
                    <p className='postedAndDate'>{moment(project.createAt.toDate()).calendar()}</p>
                </span>
            </div>
        </div>
    )
};

export default ProjectSummary;

