const fs = require('fs');

const countStudents = (path) => {
    // Check if the file exists
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }

    // Read the file content
    const fileContent = fs.readFileSync(path, 'utf-8').trim();

    // Split the content into lines and filter out empty lines
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');

    // Ensure there's at least one line for the header
    if (lines.length === 0) {
        console.log('Number of students: 0');
        return;
    }

    // Extract the header and student data
    const header = lines[0].split(',').map(field => field.trim());
    const students = lines.slice(1).map(line => line.split(',').map(value => value.trim()));

    // Create a map to count students per field and store values
    const fieldCounts = {};
    const fieldNames = {};

    // Initialize field counts
    header.forEach(field => {
        fieldCounts[field] = 0;
        fieldNames[field] = [];
    });

    // Process each student record
    students.forEach(student => {
        student.forEach((value, index) => {
            const field = header[index];
            if (value !== '') {
                fieldCounts[field] += 1; // Use operator assignment
                fieldNames[field].push(value);
            }
        });
    });

    // Log the number of students
    const totalStudents = Object.values(fieldCounts).reduce((sum, count) => sum + count, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students and list for each field
    for (const field in fieldCounts) {
        if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) { // Use safe hasOwnProperty
            const list = fieldNames[field].sort().join(', '); // Sort and join list
            console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${list}`);
        }
    }
};

module.exports = countStudents;
