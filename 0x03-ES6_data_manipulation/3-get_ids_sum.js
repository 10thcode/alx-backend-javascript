export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const studentIdsTotal = students.reduce((acc, curr) => acc + curr.id, 0);

    return studentIdsTotal;
  }

  return [];
}
