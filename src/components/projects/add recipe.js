import React, {Component} from 'react';
import '../../index.css';
import '../css/addRecipe.css'
//import Ingredient from './ingredient'


class AddRecipe extends Component {

    state = {
        title: '',
        ingredient: '',
        quantity: '',
        select: '',
        instructions: ''
    };

    handleChange = (e) => {
       // if ( (e.target.id) !== 'Ingredients' && (e.target.id) !== 'quantity' && (e.target.id) !== 'select' ) {
            this.setState ({
                [e.target.id]: e.target.value
            });
        // } else {
        //     this.setState ({
        //         [e.target.id]: e.target.value.push
        //     })
        // }

    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    render() {
        //в id & for  нужно запухнуть переменную, равную номеру и месту, в котором вызывалась константа

        /* const inputArea = () => {
             return (
                 <div className=''>
                     <label className='' for={}>{}</label>
                     <textarea id={} className='' name={}/>
                 </div>
             )
         };
 */

        //if btnAdd onClick == к текущему сост компонента нужно добавить еще одну строку
        //if btnDelete onClick == удаляем строку


        // const position =


        /* const handleClick = () => {

         };
         */



        return (
            <form className='right-aligned' onSubmit={this.handleSubmit}>
                <h4 align="center" className='title'>Add new recipe</h4>
                <div className='input-list'>
                    <p>Recipe name</p>
                    <input type='text' id='title' className='input-line' maxLength={100} onChange={this.handleChange}/>
                    <p>Ingredients</p>
                    <span className='sub-ingredient'>
                        <input type='text' id='ingredient' className='ingredient'
                               onChange={this.handleChange}/>
                        <input type='text' id='quantity' className='quantity' onChange={this.handleChange}/>
                        <select id="select" className='select' onChange={this.handleChange}>
                            <option>gram</option>
                            <option>pot</option>
                            <option>capitulum</option>
                            <option>clove</option>
                            <option>kilogram</option>
                            <option>a piece</option>
                            <option>liter</option>
                            <option>milliliter</option>
                            <option>on the tip of a knife</option>
                            <option>in your taste</option>
                            <option>bundle</option>
                            <option>а glass</option>
                            <option>tablespoon</option>
                            <option>tea spoon</option>
                            <option>chunk</option>
                            <option>thimbleful</option>
                            <option>stem</option>
                            <option>sprig</option>
                        </select>
                </span>
                </div>
                <button type='button' className='button'>Add+</button>
                <p>Instructions</p>
                <textarea name='instructions' className='input-instruction' onChange={this.handleChange}/>
                <button type='submit' className='button'>Create</button>
            </form>

        )
    }
}

export default AddRecipe;