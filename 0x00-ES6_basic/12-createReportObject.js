export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      let i = 0;
      for (const department in employeesList) {
        if (department) i += 1;
      }
      return i;
    },
  };

  return obj;
}
