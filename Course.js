class Course {
    constructor(name, minimum_avg_grade) {
        this.name = name;
        this.minimum_avg_grade = minimum_avg_grade;
        this.teacher = null;
        this.students = [];
    }

    setTeacher(teacher) {
        this.teacher = teacher;
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(student) {
        const index = this.students.indexOf(student);
        this.students.splice(index, 1);
    }

    getMinimumAvgGrade() { return this.minimum_avg_grade; }
}

module.exports = Course;