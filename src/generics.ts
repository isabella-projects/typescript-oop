import './style.css';

import * as Modules from './modules/Excercise-Generics';

const generics = new Modules.Generics();
generics.assignObject(
    {
        name: 'Leon',
    },
    {
        age: 25,
    }
);

generics.countAndDescribe('TypeScript!');
generics.countAndDescribe(['Generics', 'are', 'very', 'cool!']);
generics.extractAndConvert(
    {
        name: 'Liane',
        age: 24,
        hobbies: ['Programming', 'Gaming'],
    },
    'name'
);
