'use strict';

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('dont ok!');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('ok!!');
// }

// (num == 50) ? console.log('ok!!') : console.log('Error');
const num = 50;

switch (num) {
    case '49':
        console.log('Neverno');
        break;
    case '100':
        console.log('Neverno');
        break;
    case '50':
        console.log('V tochky');
        break;
    default:
        console.log('Ne v etot raz');
        break;
}