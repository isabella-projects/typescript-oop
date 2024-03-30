import { Helper } from '../inc/helpers';

export class MergeObject {
    protected helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    assignObject<T extends object, U extends object>(objA: T, objB: U) {
        const merged = Object.assign(objA, objB);
        const stringifyObject = this.helper.objectToString(merged);

        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, 'Merged Object', stringifyObject);
    }
}
