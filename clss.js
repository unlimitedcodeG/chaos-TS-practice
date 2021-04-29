var Dog = /** @class */ (function () {
    function Dog() {
        this.age = 3;
    }
    Dog.prototype.bark = function () {
        alert('wwwwww');
    };
    return Dog;
}());
var dog = new Dog();
console.log(dog);
