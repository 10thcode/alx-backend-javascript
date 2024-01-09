export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    const studentsLocation = students.filter((student) => student.location === city);
    return studentsLocation;
  }
  return [];
}
