let studName: string = "Alice";
let studentAge: number = 20;
let isStudentEnrolled: boolean = true;
let studentCourseList: string[] = ["Physics", "Maths", "English"];

function getStudentInformation(name: string, age: number, isEnrolled: boolean): string{
    return `Student ${name} is ${age} years old. Enrolled: ${isEnrolled}`;
}

const getStudInfo = getStudentInformation(studName, studentAge, isStudentEnrolled);
console.log(getStudInfo);