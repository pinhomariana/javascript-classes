
class User {
    constructor (name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return this.name + " " + this.lastName;
    }

    get birthYear() {
        const date = new Date().getFullYear();
        return date - this.age;
    }
}

class Teacher extends User {
    constructor (name, lastName, age, groups, yearsOfExperience) {
        super(name, lastName, age)
        this.groups = groups;
        this.yearsOfExperience = yearsOfExperience;
    }

    isGroupTeacher(groupName) {
        if (groupName == ("50b" || "51c")) {
            return true;
        }

        else {
            return false;
        }
    }
}

class Student extends User {
    constructor (name, lastName, age, group, averageGrade) {
        super (name, lastName, age, averageGrade)
        this.group = group;
        this.averageGrade = averageGrade;
    }

    static MIN_GRADE_FOR_SCHOLARSHIP = 4;

    isEligibleForScholarship() {
        if(Student.MIN_GRADE_FOR_SCHOLARSHIP <= this.averageGrade) {
            return true;
        }
        
        else {
            return false;
        }
    }
    
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4

