import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({description: 'ISP Bill', amount: 4500});
// database.ref('expenses').push({description: 'Gas bill', createdAt: 1000});
// database.ref('expenses').push({description: 'rent', amount: 109500});

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching : ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(41);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(42);
// }, 10500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const userData = snapshot.val();
//     console.log(`${userData.name} is a ${userData.job.title} at ${userData.job.company}.`);
// }, (e) => {
//     console.log('Error fetching data : ', e);
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data : ', e);
//     });

// database.ref().set({
//     name: 'Bertrand Boutillier',
//     age: 35,
//     stress: 9,
//     job: {
//         title: "architect",
//         company: 'Maisons du Monde'
//     },
//     isSingle: false,
//     location: {
//         city: 'Nantes',
//         country: 'France'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed : ', error);
// });

// database.ref().update({
//     name: 'Charles Boutillier',
//     age: 6,
//     job: 'ecolier',
//     'location/city': 'Paris'
// });

// database.ref().set('This is my data');
// database.ref('age').set(28);
// database.ref('location/city').set('Paris');

// database.ref('attributes').set({
//     weight: 80,
//     height: 180
// }).then(() => {
//     console.log('then works!');
// }).catch((e) => {
//     console.log('catch works!');
// });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('Data is removed');
// }).catch((e) => {
//     console.log('error removing data : ', e);
// })