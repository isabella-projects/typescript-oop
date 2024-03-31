import { Helper } from '../inc/helpers';
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
