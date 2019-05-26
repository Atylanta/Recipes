import React, { Component } from 'react';
import RecipeList from '../projects/recipesList';


class Deserts extends Component {
    render() {
        return (
            <div>
                <RecipeList tagName='DESERTS'/>
            </div>
        );
    }
}


export default Deserts;
