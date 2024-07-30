export default function getStudentIdsSum(object) {
  const sum = object.reduce((acc, student) => acc + student.id, 0);
  return sum;
}
