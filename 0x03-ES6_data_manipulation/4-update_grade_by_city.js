/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const newStudentsGrade = students.filter((student) => student.location === city)
    .map((student) => {
      newGrades.forEach((grade) => {
        if (student.id === grade.studentId) student.grade = grade.grade;
      });

      return student;
    });

  newStudentsGrade.forEach((newStudent) => {
    if (!newStudent.grade) newStudent.grade = 'N/A';
  });

  return newStudentsGrade;
}
