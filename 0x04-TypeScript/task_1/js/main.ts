// Define the Teacher interface

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // For additional attributes like 'contract'
}

// Extend Teacher into Directors

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the interface for the function

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Constructor interface

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class interface

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage

const student = new StudentClass('Chidera', 'Okonkwo');
console.log(student.displayName());     // Output: Chidera
console.log(student.workOnHomework()); // Output: Currently working
