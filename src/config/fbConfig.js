import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCo1lAHmNZL60Q_cYPRVsaWEJ5wQkUo58E",
    authDomain: "recipe-project-atylanta.firebaseapp.com",
    databaseURL: "https://recipe-project-atylanta.firebaseio.com",
    projectId: "recipe-project-atylanta",
    storageBucket: "recipe-project-atylanta.appspot.com",
    messagingSenderId: "729672233976"
};

firebase.initializeApp(config);
firebase.firestore().settings({ /*timestampsInSnapshots: true*/ });

export default firebase;