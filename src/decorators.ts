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

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Modules.Course(title, price);

    if (!Functions.validate(createdCourse)) {
        throw new Error('Invalid input!');
    }

    Functions.log(createdCourse);
});
