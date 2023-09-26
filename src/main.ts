type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string
    secoundName: string
    age: number
    gradeCertificate: Grade[]
}

let anton: Student = {firstName: "Anton", secoundName: "Meier", age: 17, gradeCertificate: [1, 4, 3, 1, 3, 2, 1, 2]};

function printStudent(student: Student): void {
    console.log(" ");
    console.log(`${student.firstName} ${student.secoundName} (${student.age})`);
    let line: string = "";
    for(let i: number = 0; i < 30; i++){
        line += "=";
    }
    console.log(line);
    let grade = student.gradeCertificate.map((grade) => grade === undefined ? "*" : grade);
    console.log(`Noten: ${grade}`);
}

printStudent(anton);

anton.gradeCertificate = ["A", 2, "F", 3, 1, "B", 2, 5];
printStudent(anton);

anton.gradeCertificate = ["A", 2, undefined, 3, 1, "B", undefined, 5];
printStudent(anton);

function printStudentList(studentList: Student[]): void {
    studentList.forEach((student: Student) => printStudent(student));
}

let paul: Student = {firstName: "Paul", secoundName: "Peterson", age: 19, gradeCertificate: [1, "C", 5, undefined, "B", undefined]};
let lisa: Student = {firstName: "Lisa", secoundName: "Sun", age: 17, gradeCertificate: [1, "B", 2, 1, undefined, undefined]};
let listOfStudent: Student[] = [anton, paul, lisa];
console.log(" ");
console.log("++++++++++++++++++++++++++++++");
printStudentList(listOfStudent);