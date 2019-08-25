export default interface List<T> {
    insertValue: (value: T, location?: number) => void;
    traverseList: () => void;
    findValue: (value: T) => Node;
    deleteValue: (location: number) => boolean;
}
