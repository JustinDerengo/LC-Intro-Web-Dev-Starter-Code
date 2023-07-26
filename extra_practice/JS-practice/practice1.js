function greetUser(name) {
return `Hello ${name}!`;
}

let student1 = {
    name: 'John Smith',
    gradeLevel: 4,

    passGrade: function() {
        this.gradeLevel++;
    }
};

let student2 = {
    name: 'Jane Smith',
    gradeLevel: 9,

    passGrade: function() {
        this.gradeLevel++;
    }
};

student1.passGrade();
student2.passGrade();

console.log(student1.gradeLevel);