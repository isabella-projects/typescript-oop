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

export type Combinable = number | string;
export type OutputTypes = 'as-number' | 'as-text';
