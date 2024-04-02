import { registeredValidators } from './arrays';

/* Decorator factories */
export function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

export function WithTemplate(template: string, hookId: string) {
    return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const element = document.getElementById(hookId)!;

                if (hookId) {
                    element.innerHTML = template;
                    element.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

export function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

export function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

export function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

export function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log('Index: ' + position);
}

/* Autobind decorator */
export function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        },
    };
    return adjustDescriptor;
}

/* Validation decorators */
export function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required'],
    };
}

export function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive'],
    };
}
