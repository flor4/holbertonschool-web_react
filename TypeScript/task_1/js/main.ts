// ----- Interfaces -----
// Teacher interface
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,

  [key: string]: any,
}

// Director interface
interface Director extends Teacher {
  numberOfReports: number,
}

// printTeacher interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Student class interface
interface StudentClassInterface {
  workOnHomework(): string;

  displayName(): string;
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// ----- Classes -----
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ----- Functions -----
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
}

// ----- Tests -----
// Teacher test
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Director test
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Student test
const student1 = new StudentClass('John', 'Doe');

// ----- Logs -----
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(student1.workOnHomework());
console.log(student1.displayName());
