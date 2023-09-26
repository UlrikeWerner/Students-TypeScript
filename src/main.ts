type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;
type Subject = "Sport" | "Kunst" | "Mathe" | "Erdkunde";
type SubjectAndGrad = {
    subject: Subject
    grade: Grade[]
};

type Student = {
    firstName: string
    secoundName: string
    age: number
    gradeCertificate: SubjectAndGrad[]
}

let anton: Student = {firstName: "Anton", secoundName: "Meier", age: 17, gradeCertificate: [{subject: "Sport", grade: [1,4,3,1,3,2,1,2]}]};

function printStudent(student: Student): void {
    console.log(" ");
    console.log(`${student.firstName} ${student.secoundName} (${student.age})`);
    createLine(student);
    printGrade(student.gradeCertificate);
}

printStudent(anton);

anton.gradeCertificate = [{subject: "Sport", grade: ["A", 2, "F", 3, 1, "B", 2, 5]}];
printStudent(anton);

anton.gradeCertificate = [{subject: "Sport", grade: ["A", 2, undefined, 3, 1, "B", undefined, 5]}];
printStudent(anton);

function printStudentList(studentList: Student[]): void {
    studentList.forEach((student: Student) => printStudent(student));
}

let berta: Student = {firstName: "Berta", secoundName: "Müller", age: 17, gradeCertificate: [{subject: "Sport", grade: ["A", undefined, 1]}]};
let caesar: Student = {firstName: "Cäsar", secoundName: "Schmidt", age: 17, gradeCertificate: [{subject: "Sport", grade: ["A", 1, undefined, 3, 2, 4, 5]}]};
let listOfStudent: Student[] = [anton, berta, caesar];
console.log(" ");
console.log("++++++++++++++++++++++++++++++");
printStudentList(listOfStudent);

function createLine(student: Student):void{
    let line: string = "";

    for(let i: number = 0; i < calculateNumber(student); i++){
        line += "=";
    }
    console.log(line);
}

function calculateNumber(student: Student): number{
    let spaceAndbrackets: number = 2 + 2;
    let result: number = 0;
    result += student.firstName.length + student.secoundName.length;
    result += (student.age < 10 ? 1 : 2) + spaceAndbrackets;
    return result;
}

function printGrade(grades: SubjectAndGrad[]): void{
    let gradeList: string = "Noten: ";
    grades.forEach((grade: SubjectAndGrad): void => {
        gradeList += `${grade.subject}: `;
        gradeList += grade.grade.map((e: Grade) => e === undefined ? "*" : e) + " ";
    });
    console.log(gradeList);
}

let florian: Student = {firstName: "Florian", secoundName: "Weber", age: 14, gradeCertificate:
        [{subject: "Sport", grade: ["A", 1, undefined]},
            {subject: "Kunst", grade: [3, 2, 4, 5]},
            {subject: "Mathe", grade: [1, 2, "A"]}]};
printStudent(florian);