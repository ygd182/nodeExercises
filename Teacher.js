class Teacher extends Person {
    constructor (name, address, birth_date) {
        super(name, address, birth_date);
    }

    teachCourse(course) {
        course.setTeacher(this);
    }

    stopTeachingCourse(course) {
        course.removeTeacher();
    }

    gradeStudent(student, course, grade) {
        student.setCourseGrade(course.name, grade);
    }
}

module.exports = Teacher;