const student = {
    name: 'sadman',
    age: 15,
    class: 'ten',
    marks:{
        math:78,
        physics: 89,
        chemistry:65
    }
}
const marks = student.marks;
const math = student.marks.math;
console.log(math)
// another way of getting marks:
const chemistry = student ['marks']['chemistry'];
console.log(chemistry);

// another way:
const subject = 'math';
const mathMarks = student.marks[subject];

console.log(mathMarks)