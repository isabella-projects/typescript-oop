import { Combinable } from './types';

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
