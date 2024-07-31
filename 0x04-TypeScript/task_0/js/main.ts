interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
let student1: Student = {
	firstName: "sara",
	lastName: "william",
	age: 30,
	location: "newyork"
};

let student2: Student = {
	firstName: "ali",
	lastName: "adam",
	age: 35,
	location: "texas"
};

let list:  Student[] = [student1, student2];
