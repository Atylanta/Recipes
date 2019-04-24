import React, {Component} from 'react';
import '../../index.css';
import '../css/home.css'
import Notifications from './notification'
import ProjectList from './project-list';


class Home extends Component {

    render() {
        return (
            <div className='dashboard'>
                <div className="notifications">
                <Notifications/>
            </div>
                <div className="project-list">
                    <p>Last added recipes</p>
                    <ProjectList/>
                </div>


            </div>

        )
    }

}

export default Home;