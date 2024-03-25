export class Helper {
    logError(errorMessage: string, style: 'warn' | 'fatal' | 'info') {
        const errorPrefixes = {
            warn: 'Warning',
            fatal: 'Fatal Error',
            info: 'Info',
        };

        const errorColors = {
            warn: 'orange',
            fatal: '#D04848',
            info: '#4942E4',
        };

        const errorStyling = {
            prefix: `background-color:${errorColors[style]};border-radius:5px;padding:5px;font-weight:800;font-size:1.2rem;`,
            message: 'color:inherit;font-size:1.2rem;font-weight:600;',
        };

        console.error(`%c${errorPrefixes[style]}%c ${errorMessage}`, errorStyling.prefix, errorStyling.message);
    }

    objectToString(object: Object) {
        const objectString = JSON.stringify(object, null, 2);
        return objectString;
    }

    createTags(tag: string, textContent?: string, className?: string | null, id?: string | null, innerHTML?: string | null) {
        let element = document.createElement(tag);

        className && element.classList.add(className);
        id && (element.id = id);
        element.innerHTML = innerHTML ?? '';
        element.textContent = textContent ?? '';

        return element;
    }

    getRoot() {
        const root = document.getElementById('root');
        if (!root) {
            this.logError(`${root} not found!`, 'fatal');
            return;
        }
        return root;
    }

    expandHtml(expand: HTMLElement, tags: HTMLElement) {
        expand.appendChild(tags);
    }

    expandHtmlAndLog(root: HTMLElement, label: string, result: string | number) {
        const pre = this.createTags('pre', label, 'logger');
        const log = this.createTags('code', `${result}`);

        this.expandHtml(root, pre);
        this.expandHtml(pre, log);
    }
}
