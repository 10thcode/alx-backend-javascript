const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    const data = [];

    fs.readFile(path, 'utf-8', (err, raw) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        raw.split('\n').filter((arr) => arr.length > 0).slice(1).forEach((row) => {
          data.push(row.split(','));
        });

        const students = data.length;
        const fields = {};

        data.forEach((arr) => {
          const field = arr[3];
          if (fields[field] === undefined) {
            fields[field] = [];
            data.filter((row) => row[3] === field).forEach((x) => {
              fields[field].push(x[0]);
            });
          }
        });

        console.log(`Number of students: ${students}`);

        for (const field in fields) {
          if (field) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
};
