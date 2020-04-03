  
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD4p5FvAiPJlLfra3xxOdA5yib8kolkf-k",
    authDomain: "msci-444-54350.firebaseapp.com",
    databaseURL: "https://msci-444-54350.firebaseio.com",
    projectId: "msci-444-54350",
    storageBucket: "msci-444-54350.appspot.com",
    messagingSenderId: "795922147281",
    appId: "1:795922147281:web:1590e396a5a50708f4e2f0",
    measurementId: "G-NL10J9NH6W"
  };

const fire = firebase.initializeApp(config);
export default fire;