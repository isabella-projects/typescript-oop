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
