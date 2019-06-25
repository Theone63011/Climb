
(function() {

const config = {
    apiKey: "AIzaSyDYlEPVTwj8y123NMtD8tsQdo0osCXaPPE",
    authDomain: "climb-7de83.firebaseapp.com",
    databaseURL: "https://climb-7de83.firebaseio.com",
    storageBucket: "gs://climb-7de83.appspot.com",
    messagingSenderId: "1023550186669"
  };
 	
 	if (!firebase.apps.length) {
    	firebase.initializeApp(config);
	}	
 	//firebase.initializeApp(config);


	const preObject = document.getElementById('object');

	const dbRefObject = firebase.database().ref().child('object');


	dbRefObject.on('value', snap => console.log(snap.val()));

	var database = firebase.database();


	var ref = database.ref('ladders/' + 'players');

	/*ref.child("test2").set({
		value: "val"
	
	});*/

	var data = {
		value: "Hello"
	}

	//ref.push(data);

}());

