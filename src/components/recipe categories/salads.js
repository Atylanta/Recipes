import React, { Component } from 'react';
import RecipeList from '../projects/recipesList';


class Salads extends Component {
    render() {
        return (
            <div>
                <RecipeList tagName='SALADS'/>
            </div>
        );
    }
}


export default Salads;
