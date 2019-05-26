import React, {Component} from 'react';
import '../../index.css';
import '../css/home.css'
import Notifications from './notification'
import ProjectList from './project-list';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import FirstPage from './FirstPage'
//import Meat from '../recipe categories/meat'


class Home extends Component {
    render() {
        const { projects, auth } = this.props;
        return (
            <div className='dashboard'>
                <div className="notifications">
                    {auth.uid ? <Notifications/> : <FirstPage/>}
            </div>
                <div className="project-list">
                    <p>Last added recipes</p>
                    <ProjectList projects = {projects}/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Home);