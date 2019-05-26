import React from 'react';
import '../css/projectDetails.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import IngredientList from "./ingredientList";
import moment from "moment";

const ProjectDetails = (props) => {

    const { project } = props;
    if (project) {
        return (
        <div className='project-details '>
            <div className='bordered-recipe'>
                <div className="title">{project.title}</div>
                <IngredientList list={project.ingredients}/>
                <p className='instruction'>{project.instructions}</p>
                <p className='tags'>Tags: { project.tags.join(', ') }</p>
                <div className='postedAndDate'>Posted by {project.authorFirstName + ' ' + project.authorLastName}</div>
                <div className='postedAndDate'>{moment(project.createAt.toDate()).calendar()}</div>
            </div>
        </div>
        )} else {
        return (
            <div>Loading project...</div>
        )
    }

};

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);