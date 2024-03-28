import { Helper } from './helpers';
import { Combinable, Animal } from './types';

export function add(n1: number, n2: number) {
    return n1 + n2;
}

export function printResult(num: number): void {
    console.log('Result is: ' + num);
}

export function addHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    console.log(callback(result));
}

export function generateError(message: string, code: number): never {
    throw {
        errorMessage: message,
        errorCode: code,
    };
}

export function log(value: Combinable): void {
    console.log(value);
}

export function moveAnimal(animal: Animal) {
    const helper = new Helper();

    let speed;
    let moveType;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            moveType = 'flying';
            break;
        case 'horse':
            speed = animal.runningSpeed;
            moveType = 'running';
            break;
    }
    const animalType = animal.type.charAt(0).toUpperCase() + animal.type.slice(1);
    const root = helper.getRoot()!;
    helper.expandHtmlAndLog(root, 'Animal moving', `${animalType} is ${moveType} at speed: ${speed} m/h`);
}
