import React, {Component} from 'react';
import '../../index.css';
import '../css/addRecipe.css'
import {createProject} from "../../store/actions/projectAction";
import connect from "react-redux/es/connect/connect";
import { Redirect } from 'react-router-dom';


class AddRecipe extends Component {

    state = {
        title: '',
        ingredients: [],
        tags: [],
        instructions: ''
    };

    changeIngredient = () => {
        const parentElement = document.getElementById('subIngredient').childNodes;
        let arrayI = [];
        for (let i = 0; i < parentElement.length; i++) {
            let string = parentElement[i].value;
            arrayI.push(string)
        }
        this.setState({
            ingredients: arrayI
        });

        const parentTags = document.getElementById('subTags').childNodes;
        let arrayT = [];
        for (let j = 0; j < parentTags.length; j++) {
            let stringT = parentTags[j].value;
            arrayT.push(stringT)
        }
        this.setState({
            tags: arrayT
        });
    };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    };

    handleAdd = () => {
        const subIngredient = document.getElementById('subIngredient');
        const Ingredient = document.createElement('input');
        Ingredient.type = 'text';
        subIngredient.appendChild(Ingredient);

       if(subIngredient.childNodes.length > 1) {
           const deleteBtn = document.getElementById('deleteBtn');
           deleteBtn.style.visibility = 'visible';

       }
    };

    handleAddTags = () => {
        const subTags = document.getElementById('subTags');
        const Tag = document.createElement('input');
        Tag.type = 'text';
        subTags.appendChild(Tag);

        if(subTags.childNodes.length > 1) {
            const deleteBtnTags = document.getElementById('deleteBtnTags');
            deleteBtnTags.style.visibility = 'visible';

        }
    };

    handleDelete = () => {
        const subIngredient = document.getElementById('subIngredient');
        const lastChild = subIngredient.lastChild;
        subIngredient.removeChild(lastChild);
            if (subIngredient.childNodes.length === 1) {
                const deleteBtn = document.getElementById('deleteBtn');
                deleteBtn.style.visibility = 'hidden';
            }
    };

    handleDeleteTags = () => {
        const subTags = document.getElementById('subTags');
        const lastChild = subTags.lastChild;
        subTags.removeChild(lastChild);
        if (subTags.childNodes.length === 1) {
            const deleteBtnTags = document.getElementById('deleteBtnTags');
            deleteBtnTags.style.visibility = 'hidden';
        }
    };

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login'/>

        return (
            <form className='right-aligned' onSubmit={this.handleSubmit} onBlur={this.changeIngredient}>
                <h4 align="center" className='title'>Add new recipe</h4>
                <div className='input-list' >
                    <p>Recipe name</p>
                    <input type='text' id='title' className='input-line' maxLength={100} onChange={this.handleChange}/>
                    <p>Ingredients</p>
                    <div className='sub-ingredient' id='subIngredient'>
                        <input type='text'/>
                    </div>
                    <span className='AddDeleteBtn'>
                        <button type='button' className='button' onClick={this.handleAdd}>Add+</button>
                        <button type='button' id='deleteBtn' className='button deleteBtn' onClick={this.handleDelete}>Delete</button>
                    </span>
                </div>
                <p>Tags</p>
                <div className='sub-ingredient' id='subTags'>
                    <input type='text'/>
                </div>
                <span className='AddDeleteBtn'>
                        <button type='button' className='button' onClick={this.handleAddTags}>Add+</button>
                        <button type='button' id='deleteBtnTags' className='button deleteBtn' onClick={this.handleDeleteTags}>Delete</button>
                    </span>
                <p>Instructions</p>
                <textarea id='instructions' className='input-instruction' onChange={this.handleChange}/>
                <button type='submit' className='button'>Create</button>
            </form>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
