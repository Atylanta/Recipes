import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";
import {Link} from "react-router-dom";
import ProjectSummary from "../projects/projectSummary";


class RecipeList extends Component {
    render() {
        const { tagName } = this.props;
        const { projects } = this.props;
        return (
            <div>
                { projects && projects.map((project) => {
                    const tags = project.tags;
                    let result = false;
                    for (let i = 0; i < tags.length; i ++) {
                        if (tags[i].toUpperCase() === tagName) {
                            result = true;
                            break
                        }
                    }
                    if (result) {
                        return (
                            <Link to={'/project/' + project.id} key={project.id}>
                                <ProjectSummary project={project} />
                            </Link>
                        )
                    } else return null;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(RecipeList);
