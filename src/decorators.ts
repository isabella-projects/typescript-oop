import './style.css';

import * as Modules from './modules/Excercise-Decorators';
import * as Functions from './inc/functions';

const person = new Modules.Person();
Functions.log(person);

const product = new Modules.Product('Product', 150);
const price = product.getPriceWithTax(0.05);
Functions.log(price);

const printer = new Modules.Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage);
