


var dbUrl = 'xxxxx';

export function getData(): any[] {

    console.log('get the database data')

    return [
        {
            title: '121312'
        },
        {
            title: '121312  '
        }
    ]
}



export class MsSqlDb<T> implements DBI {

    constructor() {
        console.log('build dataBase connection');
    }
    add(info: T): boolean {
        console.log(info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.")
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.")
    }
    get(id: number): any[] {

        var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxxx'
            }
        ]
    }
} </T>




interface Animal {
    eat(): void;
}

interface Person extends Animal {
    work(): void;
}


class Programmer {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    coding(code: string) {
        console.log(this.name + code)
    }
}


class Web extends Programmer implements Person {
    constructor(name: string) {
        super(name)
    }
    eat() {
        console.log(this.name + 'like eat manto')
    }
    work() {
        console.log(this.name + 'like coding')
    }
}

var w = new Web('lelouchu');

w.eat()

    < T > </>
// 只返回string 类型的数据

// function getData(value:string):string{
//    return value
//}

// 同时返回string类型与number类型

// function getData1(value)
class MinClass<T>{
    public list: T[] = [];

    add(value: T): void {
        this.list.push(value)
    }
    min(): T {
        var minNum = this.list[0];

        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }

        return minNum;
    }
}

var m1 = new MinClass<number>();
m1.add(11);
m1.add(3);
m1.add(2);

alert(m1.min())
// ASCII compare

var m2 = new MinClass<string>();
m2.add('a');
m2.add('b');
m2.add('c');
alert(m2.min())


interface ConfigFn<T> {
    (value: T): T;
}


function getData<T>(value: T): T {
    return value;
}

var myGetData: ConfigFn<string> = getData;

myGetData('20')




class MysqlDb<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
    }
}

// 想給User表增加數據
// 1.定義一個User類進行映射

class User {
    username: string | undefined;
    password: string | undefined;
}

var u = new User();
u.username = '張三';
u.password = '123456';

var Db = new MysqlDb();

Db.add(u)



interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}


class MysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }

}


class MsSqlDb<T> implements DBI<T>{
    constructor() {
        console.log('build DB connection!')
    }
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }

}

class User {
    username: string | undefined;
    password: string | undefined;
}

var u = new User();
u.username = '張三111';
u.password = '123456';

var oMyMsSql = new MsSqlDb<User>();



enum Flag { success = 1, error = -1 }

console.log(Flag.error)


function sum(a: number, b: number ...result: number[]): number {
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }

    return sum;
}

alert(sum(1, 2, 3, 4, 5, 6))


function getInfo(name: string): string;
function getInfo(name: string, age: number): string;
function getInfo(name: string, age?: any): any {
    if (age) {
        return ' I am:' + name + 'My age is:' + age;
    } else {
        return 'I am:' + name;
    }
}

//es5\
//this direction  arrow function this direct context
// setTimeout(function () {
//     alert('run')
// }, 1000)



setTimeout(() => {
    alert('run')
}, 1000)



function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        alert(this.name + '运动')
    }
}

Person.prototype.sex = 'male';
Person.prototype.work = function () {
    alert(this.name + 'work')
}


function Web(name, age) {
    Person.call(this, name, age)
}

Web.prototype = new Person();

var w = new Web('李田所', 24);
// w.run()
w.work()


abstract class Animal {

    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): any {

    };
}


class Dog extends Animal {

    constructor(name: any) {
        super(name)
    }

    eat() {
        console.log(this.name + "吃饭")
    }
}