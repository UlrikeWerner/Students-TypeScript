type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F";

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
    console.log(`Noten: ${student.gradeCertificate}`);
}

printStudent(anton);

anton.gradeCertificate = ["A", 2, "F", 3, 1, "B", 2, 5];
printStudent(anton);