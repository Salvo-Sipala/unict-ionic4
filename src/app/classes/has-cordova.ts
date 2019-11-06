
export class HasCordova {

    check(): boolean {
        // tslint:disable-next-line:no-string-literal
        return window['cordova'] !== undefined;
    }
}
