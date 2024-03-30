import './style.css';

import * as Modules from './modules/Excercise-Generics';

const merge = new Modules.MergeObject();
merge.assignObject(
    {
        name: 'Leon',
    },
    {
        age: 25,
    }
);
