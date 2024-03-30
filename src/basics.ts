import './style.css';

import * as Modules from './modules/Excercise-Basic';
import * as Arrays from './inc/arrays';
import * as Functions from './inc/functions';

/* Welcome to the excercises */
const welcome = new Modules.WelcomeMessage();
welcome.displayWelcomeMessage(true);

/* Simple logging of an object into the DOM */
const excercise2 = new Modules.ObjectToJSON();
excercise2.stringifyObject(Arrays.person);

/* Enums, Union types, Literal types and etc. */
const excercise3 = new Modules.UnionAliases();
excercise3.combine(3, 4, 'as-number');
excercise3.combine('John ', 'Doe', 'as-text');
excercise3.combine('13', '17', 'as-number');

/* Functions as types */
let excercise4: (a: number, b: number) => number;
excercise4 = Functions.add;
console.log(excercise4(5, 8));

/* Functions with callbacks */
Functions.addHandle(12, 25, (result) => result);
