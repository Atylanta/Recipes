import React, { Component } from 'react';
import RecipeList from '../projects/recipesList';


class Fish extends Component {
    render() {
        return (
            <div>
                <RecipeList tagName='FISH'/>
            </div>
        );
    }
}


export default Fish;
