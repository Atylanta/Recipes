import React, { Component } from 'react';
import RecipeList from '../projects/recipesList';


class Meat extends Component {
    render() {
        return (
            <div>
                <RecipeList tagName='MEAT'/>
            </div>
        );
    }
}


export default Meat;
