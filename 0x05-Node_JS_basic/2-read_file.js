const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf-8').trim();

  const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  const header = lines[0].split(',');
  const students = lines.slice(1).map((line) => line.split(','));

  const fieldCounts = {};
  const fieldNames = {};

  header.forEach((field) => {
    fieldCounts[field] = 0;
    fieldNames[field] = [];
  });

  students.forEach((student) => {
    student.forEach((value, index) => {
      const field = header[index];
      if (value.trim() !== '') {
        fieldCounts[field] += 1;
        fieldNames[field].push(value.trim());
      }
    });
  });

  const totalStudents = Object.values(fieldCounts).reduce((sum, count) => sum + count, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const field in fieldCounts) {
    if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
      const list = fieldNames[field].join(', ');
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${list}`);
    }
  }
};

module.exports = countStudents;
