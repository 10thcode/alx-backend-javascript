const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let payload = 'This is the list of our students\n';
  const data = [];

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

    payload += `Number of students: ${students}`;

    for (const field in fields) {
      if (field) {
        payload += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }
    }
  } catch (err) {
    payload += 'Cannot load the database';
  }

  res.send(payload);
});

app.listen(1245);

module.exports = app;
