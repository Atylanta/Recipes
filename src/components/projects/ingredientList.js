import React from 'react';

const IngredientList = ({ list }) =>
    <ul className='ingredients'>
        {
            list.map((ingredient, i) =>
                <li key={i}>{ingredient}</li>
            )}
    </ul>;

export default IngredientList;
