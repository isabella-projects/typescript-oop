export interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

export interface Greetable {
    name: string;

    greet(phrase: string): void;
}
