export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    if (department) employees.push(...report.allEmployees[department]);
  }

  return employees[Symbol.iterator]();
}
