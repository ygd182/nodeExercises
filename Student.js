class Student extends Person {
    constructor (name, address, birth_date, id) {
        this.current_grades = {};
        this.avg_grade = 0;
        this.student_id = id;
        super(name, address, birth_date);
    }

    enrollToCourse(course) {
        course.addStudent(this);
    }

    leaveCourse(course) {
        course.removeStudent(this);
    }

    setCourseGrade(course_name, grade) {
        this.current_grades[course_name] = grade;
        this.avg_grade = getAverage();
    }

    getAverage() {
        let total = 0;
        Object.entries(this.current_grades).forEach(([key, value]) => total + value);
        return total/Object.entries(this.current_grades).length;
    }
}

module.exports = Student;