export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
//make async call to database

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

       /* const tags = project.tags;
        if (tags.length > 1) {
            for (let i = 0; i < tags.length; i++) {
                firestore.collection(tags[i]).add({
                    ...project,
                    authorFirstName: profile.firstName,
                    authorLastName: profile.lastName,
                    authorId: authorId,
                    createAt: new Date()
                }).then(() => {
                    dispatch({
                        type: 'CREATE_PROJECT',
                        project: project
                    })
                }).catch((err) => {
                    dispatch({
                        type: 'CREATE_PROJECT_ERROR', err
                    })
                })
            }

        } else {
            firestore.collection(tags[0]).add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createAt: new Date()
            }).then(() => {
                dispatch({
                    type: 'CREATE_PROJECT',
                    project: project
                })
            }).catch((err) => {
                dispatch({
                    type: 'CREATE_PROJECT_ERROR', err
                })
            })
        }*/
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project: project
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR', err
            })
        })
    }
};