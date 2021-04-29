"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsSqlDb = exports.getData = void 0;
var dbUrl = 'xxxxx';
function getData() {
    console.log('get the database data');
    return [
        {
            title: '121312'
        },
        {
            title: '121312  '
        }
    ];
}
exports.getData = getData;
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
        console.log('build dataBase connection');
    }
    MsSqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxxx'
            }
        ];
    };
    return MsSqlDb;
}());
exports.MsSqlDb = MsSqlDb;
/T>;
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + 'like eat manto');
    };
    Web.prototype.work = function () {
        console.log(this.name + 'like coding');
    };
    return Web;
}(Programmer));
var w = new Web('lelouchu');
w.eat()
    < T > />;
// 只返回string 类型的数据
// function getData(value:string):string{
//    return value
//}
// 同时返回string类型与number类型
// function getData1(value)
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m1 = new MinClass();
m1.add(11);
m1.add(3);
m1.add(2);
alert(m1.min());
// ASCII compare
var m2 = new MinClass();
m2.add('a');
m2.add('b');
m2.add('c');
alert(m2.min());
function getData(value) {
    return value;
}
var myGetData = getData;
myGetData('20');
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
// 想給User表增加數據
// 1.定義一個User類進行映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '張三';
u.password = '123456';
var Db = new MysqlDb();
Db.add(u);
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
        console.log('build DB connection!');
    }
    MsSqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSqlDb;
}());
exports.MsSqlDb = MsSqlDb;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '張三111';
u.password = '123456';
var oMyMsSql = new MsSqlDb();
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
console.log(Flag.error);
function sum(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4, 5, 6));
function getInfo(name, age) {
    if (age) {
        return ' I am:' + name + 'My age is:' + age;
    }
    else {
        return 'I am:' + name;
    }
}
//es5\
//this direction  arrow function this direct context
// setTimeout(function () {
//     alert('run')
// }, 1000)
setTimeout(function () {
    alert('run');
}, 1000);
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        alert(this.name + '运动');
    };
}
Person.prototype.sex = 'male';
Person.prototype.work = function () {
    alert(this.name + 'work');
};
function Web(name, age) {
    Person.call(this, name, age);
}
Web.prototype = new Person();
var w = new Web('李田所', 24);
// w.run()
w.work();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
    };
    ;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "吃饭");
    };
    return Dog;
}(Animal));
