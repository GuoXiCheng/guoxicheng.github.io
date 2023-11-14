// npm run code output/design-pattern/prototype/development.js

export {};

class User {

    constructor(private name: string, private age: number, private sex: string) {

    }

    clone() {
        return new User(this.name, this.age, this.sex);
    }

    setAge(age: number) {
        this.age = age;
    }
}

const user = new User("张三", 18, "男");
user.setAge(28);
console.log(user);

const newUser = user.clone();
newUser.setAge(38);
console.log(newUser);