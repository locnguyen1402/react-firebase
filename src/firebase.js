import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCEHQe6DniMKeBNeag3nUMqwwbI9WRjo_Q",
    authDomain: "shoesshop-ee180.firebaseapp.com",
    databaseURL: "https://shoesshop-ee180.firebaseio.com",
    projectId: "shoesshop-ee180",
    storageBucket: "shoesshop-ee180.appspot.com",
    messagingSenderId: "702842267368"
};
firebase.initializeApp(config);

/*var firebase = {
    getProducts : function () {
        retur
    }
}*/

export  default firebase;