import React, { Component } from 'react';
import RecipeList from '../projects/recipesList';


class Vegetables extends Component {
    render() {
        return (
            <div>
                <RecipeList tagName='VEGETABLES'/>
            </div>
        );
    }
}


export default Vegetables;