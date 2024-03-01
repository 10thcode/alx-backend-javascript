const fs = require('fs');
const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    const data = [];
    res.write('This is the list of our students\n');

    try {
      const raw = fs.readFileSync(process.argv[2], 'utf-8');

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

      res.write(`Number of students: ${students}`);

      for (const field in fields) {
        if (field) {
          res.write(`\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    } catch (err) {
      res.write('Cannot load the database');
    }
  }

  res.end();
});

app.listen(1245);

module.exports = app;
