import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!\nMy First Cloud Function :)");
});

export const test = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase Home Test");
   });
