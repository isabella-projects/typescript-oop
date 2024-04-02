export interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

export interface Greetable extends Named {
    greet(phrase: string): void;
}

interface Named {
    readonly name?: string;
}

export interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

export interface Horse {
    type: 'horse';
    runningSpeed: number;
}

export interface ErrorContainer {
    [prop: string]: string;
}

export interface Lengthy {
    length: number;
}

export interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

export interface ValidatorConfig {
    [property: string]: {
        [validateableProp: string]: string[]; // ['required', 'positive']
    };
}
