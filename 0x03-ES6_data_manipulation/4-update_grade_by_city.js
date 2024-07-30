export default function updateStudentGradeByCity(object, city, newGrades) {
  if (!Array.isArray(object)) {
    return 'N/A';
  }
  return object
    .filter((student) => student.location === city)
    .map((student) => {
      const num = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: num ? num.grade : 'N/A',
      };
    });
}
