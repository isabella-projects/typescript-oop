import { Helper } from './helpers';
import { ErrorContainer, CourseGoal } from './interfaces';
import { Combinable, Combination, Animal } from './types';

export function add(a: number, b: number): number;
export function add(a: string, b: string): string;
export function add(a: Combination, b: Combination) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

export function printResult(num: number): void {
    console.log('Result is: ' + num);
}

export function addHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    console.log(callback(result));
}

export function generateError(message: ErrorContainer, code: number): never {
    throw {
        errorMessage: message,
        errorCode: code,
    };
}

export function log(...values: Combinable[]) {
    for (let value of values) {
        console.log(value);
    }
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

export function createGoal(title: string, description: string, date: Date): CourseGoal {
    const helper = new Helper();

    let goal: Partial<CourseGoal> = {};

    goal.title = title;
    goal.description = description;
    goal.completeUntil = date;

    const root = helper.getRoot()!;
    helper.expandHtmlAndLog(root, 'Main Goal', helper.objectToString(goal));

    return goal as CourseGoal;
}
