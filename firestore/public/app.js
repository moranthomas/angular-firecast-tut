( function() { 

    
    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCA1iU5cDLEaWHs3SYR1sxBsKI1GC6pWxs",
        authDomain: "fir-firestore-quickstart.firebaseapp.com",
        databaseURL: "https://fir-firestore-quickstart.firebaseio.com",
        projectId: "fir-firestore-quickstart",
        storageBucket: "fir-firestore-quickstart.appspot.com",
        messagingSenderId: "591145228735"
      };

    firebase.initializeApp(config);
    
    
    angular
    .module('app', ['firebase'])
    .controller('MyCtrl', function($firebaseObject){
        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');
        this.object = $firebaseObject(ref);
    });


}());
