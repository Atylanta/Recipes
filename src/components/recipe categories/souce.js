import React, { Component } from 'react';
import RecipeList from '../projects/recipesList';


class Sauce extends Component {
    render() {
        return (
            <div>
                <RecipeList tagName='SAUCE'/>
            </div>
        );
    }
}


export default Sauce;
