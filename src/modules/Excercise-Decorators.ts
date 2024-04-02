import * as Decorators from '../inc/decorators';

@Decorators.Logger('Loggin person object')
@Decorators.WithTemplate('<h1>My Person Object</h1>', 'app')
export class Person {
    name = 'Alexander';

    constructor() {
        console.log('Creating a person object...');
    }
}

export class Product {
    @Decorators.Log
    title: string;
    private _price: number;

    @Decorators.Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Decorators.Log3
    getPriceWithTax(@Decorators.Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

export class Printer {
    message = 'This works!';

    @Decorators.Autobind
    showMessage() {
        console.log(this.message);
    }
}

export class Course {
    @Decorators.Required
    title: string;
    @Decorators.PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}
