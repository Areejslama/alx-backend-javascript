interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly lastName: string;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
