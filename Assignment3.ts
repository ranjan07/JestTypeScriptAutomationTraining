class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
    }
}

class Student extends Person {
    studentId: string;

    constructor(name: string, age: number, studentId: string) {
        super(name, age);
        this.studentId = studentId;
    }

    study(): void {
        console.log(`${this.name} is studying.`);
    }
}

const student = new Student("Ranjan", 50, "R12345");
student.introduce();
student.study();