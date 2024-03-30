import { Bird, Horse } from './interfaces';

enum Role {
    OWNER = 'Owner',
    ADMIN = 'Admin',
    MODERATOR = 'Moderator',
    HELPER = 'Helper',
    USER = 'User',
}

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

export type Combinable = number | number[] | string | string[] | object;
export type Combination = number | string;
export type OutputTypes = 'as-number' | 'as-text';

/* Discriminated unions */
export type Animal = Bird | Horse;
