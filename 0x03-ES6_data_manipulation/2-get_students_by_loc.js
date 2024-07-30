export default function getStudentsByLocation(object, city) {
  const result = object.filter((student) => student.location === city);
  return result;
}
