import { ValidatorConfig } from './interfaces';
import { Role } from './types';

export const person = {
    name: 'John Doe',
    age: 32,
    hobbies: ['Programming', 'Gaming', 'Scripting'],
    skills: ['PHP', 'Laravel', 'JavaScript', 'TypeScript', 'SQL'],
    role: Role.OWNER,
};

export const fetchUserData = {
    id: 'user-1',
    name: 'John',
    job: {
        title: 'CEO',
        description: 'Coding Acadamey',
    },
};

export const names: Array<string> = ['Max', 'Manuel'];

export const promise: Promise<string> = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve('Done');
    }, 2000);
});

export const moreNames: Readonly<string[]> = ['George', 'Anna'];
// Not possible due to Readonly utility type \\
// moreNames.push('Alex');
// moreNames.pop();

export const registeredValidators: ValidatorConfig = {};
