import { Bird, Horse } from './interfaces';

export enum Role {
    OWNER = 'Owner',
    ADMIN = 'Admin',
    MODERATOR = 'Moderator',
    HELPER = 'Helper',
    USER = 'User',
}

export type Combinable = number | number[] | string | string[] | object;
export type Combination = number | string;
export type OutputTypes = 'as-number' | 'as-text';

/* Discriminated unions */
export type Animal = Bird | Horse;
