export default class Node {
    private _next: Node = null;
    private _value: any = null;

    constructor(value: any) {
        this._value = value;
    }

    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
    }

    public get next(): Node {
        return this._next;
    }

    public set next(node: Node) {
        this._next = node;
    }
}
