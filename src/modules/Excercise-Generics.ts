import { Helper } from '../inc/helpers';
import * as Functions from '../inc/functions';
import * as Interfaces from '../inc/interfaces';

export class Generics {
    protected helper: Helper;
    private instantiations = 0;

    constructor() {
        this.helper = new Helper();
    }

    assignObject<T extends object, U extends object>(objA: T, objB: U) {
        const merged = Object.assign(objA, objB);
        const stringifyObject = this.helper.objectToString(merged);

        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, 'Merged Object', stringifyObject);
    }

    countAndDescribe<T extends Interfaces.Lengthy[] | Interfaces.Lengthy>(element: T): [T, string] {
        const length = element.length;
        const descriptionText = length === 0 ? 'Got no elements.' : `Got ${length} element${length !== 1 ? 's' : ''}.`;

        const joinedElements = Array.isArray(element) ? this.joinArray(element) : String(element);
        const output = `${joinedElements} ${descriptionText}`;

        const root = this.helper.getRoot()!;
        this.instantiations++;
        this.helper.expandHtmlAndLog(root, `Joined elements №${this.instantiations}`, output);

        return [element, descriptionText];
    }

    extractAndConvert<T extends object, U extends keyof T>(object: T, key: U) {
        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, 'Object Generics', `Value of ${String(key)}: ${object[key]}`);

        return object[key];
    }

    joinArray<T>(array: T[]): string {
        return array.join(' ');
    }
}

export class DataStorage<T> {
    private data: T[] = [];

    addItem(items: T | T[]) {
        if (Array.isArray(items)) {
            this.data.push(...items);
        } else {
            this.data.push(items);
        }
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        const items = [...this.data];

        return {
            item: items,
            log: () => {
                Functions.log(items);
            },
        };
    }

    sortItems() {
        this.data.sort((a, b) => {
            if (typeof a === 'number' && typeof b === 'number') {
                return a - b;
            }
            return 0;
        });
    }
}
