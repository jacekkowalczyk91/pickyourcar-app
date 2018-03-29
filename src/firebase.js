import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDB4Ajf0DscqGsWoU0Q5OmTyXZ9z7HrpBY",
    authDomain: "pickyourcar-app.firebaseapp.com",
    databaseURL: "https://pickyourcar-app.firebaseio.com",
    projectId: "pickyourcar-app",
    storageBucket: "pickyourcar-app.appspot.com",
    messagingSenderId: "38416860494"
};
firebase.initializeApp(config);

export const database = firebase.database
