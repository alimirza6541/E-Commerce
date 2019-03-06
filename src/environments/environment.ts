// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireConfig : {
    apiKey: "AIzaSyBk4Fc9-uco_1O6NrDbQuIv35tA5WsfUfk",
    authDomain: "e-commerce-cd76f.firebaseapp.com",
    databaseURL: "https://e-commerce-cd76f.firebaseio.com",
    projectId: "e-commerce-cd76f",
    storageBucket: "e-commerce-cd76f.appspot.com",
    messagingSenderId: "735034210452"
  },
  stripeKey: 'pk_test_M5ICdbBTRgBS7rsvzn6C2nqK',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
