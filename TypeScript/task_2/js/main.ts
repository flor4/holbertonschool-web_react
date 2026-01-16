// ========== Interfaces ==========
interface DirectorInterface {
  workFromHome(): string;

  getCoffeeBreak(): string;

  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;

  getCoffeeBreak(): string;

  workTeacherTasks(): string;
}

// ========== Classes ==========
class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

// ========== Functions ==========
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass == "History") {
    return "Teaching History"
  }
}

// ========== Logs ==========
// Teacher
let emp: Director | Teacher = createEmployee(200);
console.log(emp.constructor.name);
console.log(executeWork(emp));

// Director
emp = createEmployee(1000);
console.log(emp.constructor.name);
console.log(executeWork(emp));

// Director
emp = createEmployee('$500');
console.log(emp.constructor.name);
console.log(executeWork(emp));

// Teaching Math
console.log(teachClass("Math"));

// Teaching History
console.log(teachClass("History"));