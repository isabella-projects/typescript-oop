import { Helper } from '../inc/helpers';
import { OutputTypes } from '../inc/types';

export class WelcomeMessage {
    protected helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    displayWelcomeMessage(displayWelcome: boolean = false) {
        if (displayWelcome) {
            const root = this.helper.getRoot()!;
            this.helper.expandHtml(root, this.helper.createTags('h1', 'Hello From TypeScript'));
        }
    }
}

export class ObjectToJSON extends WelcomeMessage {
    stringifyObject(object: Object) {
        const result = this.helper.objectToString(object);

        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, 'Enums, types & more', result);
    }
}

export class UnionAliases extends WelcomeMessage {
    private instantiations = 0;

    combine(input1: number | string, input2: number | string, resultConversion: OutputTypes) {
        let result;
        if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
            result = +input1 + +input2;
        } else {
            result = input1.toString() + input2.toString();
        }

        this.instantiations++;

        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, `Union Types Excercise №${this.instantiations}`, `Result is: ${result}`);

        return result;
    }
}
