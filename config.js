/* This code is importing the Firebase library and initializing a connection to a Firebase database
using the provided configuration object. It checks if there are any existing Firebase apps and
initializes one if there are none. Finally, it exports the Firebase database for use in other parts
of the application. */


/* `import firebase from 'firebase';` is importing the Firebase library, which allows the code to
interact with Firebase services such as the Firebase Realtime Database. */
import firebase from 'firebase';

/* `const firebaseConfig` is an object that contains the configuration information needed to connect to
a Firebase database. It includes the API key, authentication domain, database URL, project ID,
storage bucket, messaging sender ID, and app ID. This information is used by the Firebase library to
establish a connection to the database. */
const firebaseConfig = {
  apiKey: "AIzaSyBdiYwoFkwVLRIOHj8sf-z8itnLIY0ViEI",
  authDomain: "quizz-application-f6c0e.firebaseapp.com",
  databaseURL: "https://quizz-application-f6c0e-default-rtdb.firebaseio.com",
  projectId: "quizz-application-f6c0e",
  storageBucket: "quizz-application-f6c0e.appspot.com",
  messagingSenderId: "418324260260",
  appId: "1:418324260260:web:5f5329d19c6396007dcd31"
};


/* This code block is checking if there are any existing Firebase apps initialized. If there are none,
it initializes a new Firebase app using the provided configuration object `firebaseConfig`. If there
is an existing app, it retrieves it using `firebase.app()`. This ensures that only one instance of
the Firebase app is running at a time. */
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}
else {
  firebase.app();
}

/* `export default firebase.database()` is exporting the Firebase Realtime Database for use in other
parts of the application. It allows other modules to import and use the database instance created in
this module. */
export default firebase.database()