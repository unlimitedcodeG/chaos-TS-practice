class GenericNumber<T> {
    // to get rid of  error, you can define constructor 
    // which takes [zeroValue] and [add] as arguments
    constructor(public zeroValue: T, public add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}