export default function getListStudentIds(students) {
  if (typeof students === 'object') {
    const studentsId = students.map((student) => student.id);

    return studentsId;
  }
  return [];
}
