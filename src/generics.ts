import './style.css';

import * as Modules from './modules/Excercise-Generics';

/* Generic methods */
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

/* Generic class */
// Storage strings \\
const textStorage = new Modules.DataStorage<string>();
textStorage.addItem(['Alex', 'Vivian', 'Volser']);
textStorage.removeItem('Volser');
textStorage.getItems().log();

// Storage numbers \\
const numberStorage = new Modules.DataStorage<number>();
numberStorage.addItem(28);
numberStorage.addItem([3, 4, 5, 9, 24]);
numberStorage.sortItems();
numberStorage.removeItem(24);
numberStorage.getItems().log();
