const initState = {
    projects: [
        {id: '1', title: 'bla', ingridients: '1 onion, 1 cup of something', instruction: '1 bla bla bla bla bla'},
        {id: '2', title: 'blabla', ingridients: '2 onion, 2 cup of something', instruction: '2 bla bla bla bla bla'},
        {id: '3', title: 'blablabla', ingridients: '3 onion, 3 cup of something', instruction: '3 bla bla bla bla bla'},
        {
            id: '4',
            title: 'blablablabla',
            ingridients: '4 onion, 4 cup of something',
            instruction: '4 bla bla bla bla bla'
        }
    ]
};


const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;