/*
the following works fine if left-pad is not known to TS (has no d.ts)
it's the only way to import unknown stuff, obviously without type-checks

second and third lines work (one or the other, not both at the same time) only when left-pad is known to TS
you can install definitions via tsd (none found for left-pad) or write on your own.
To write one, go to ambients/left-pad.d.ts and uncomment all the lines there.
After that you can use one of these lines to import and rely on "compiler" to type-check your code
*/


let leftpad = require('left-pad');
//import * as leftpad from 'left-pad';
//import leftpad = require('left-pad');

console.log(leftpad('trolololo', 25, 'o'));

// explodes - wrong arg types
//console.log(leftpad(5, 10, 15));
