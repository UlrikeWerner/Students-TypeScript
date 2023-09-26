type Grade = 1 | 2 | 3 | 4 | 5 | 6;

type Student = {
    firstName: string
    secoundName: string
    age: number
    gradeCertificate: Grade[]
}

let paul: Student = {firstName: "Paul", secoundName: "Peterson", age: 25, gradeCertificate: [1, 5, 4]}

function printStudent(student: Student): void {
    console.log(`${student.firstName} ${student.secoundName} (${student.age})`);
    let line: string = "";
    for(let i = 0; i < 30; i++){
        line += "=";
    }
    console.log(line);
    console.log(`Noten: ${student.gradeCertificate}`);
}

printStudent(paul);