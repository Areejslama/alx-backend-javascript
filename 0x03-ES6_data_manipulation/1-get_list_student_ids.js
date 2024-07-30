export default function getListStudentIds(object) {
  if (!Array.isArray(object)) {
    return [];
  }
  const map1 = object.map((student) => student.id);
  return map1;
}
