import React, { Component } from 'react';
import RecipeList from '../projects/recipesList';


class Chicken extends Component {
    render() {
        return (
            <div>
                <RecipeList tagName='CHICKEN'/>
            </div>
        );
    }
}


export default Chicken;
