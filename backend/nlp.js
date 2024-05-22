
// const nlp = require('compromise');

// function parseTime(timeString) {
//   const [time, modifier] = timeString.split(' ');
//   let [hours, minutes] = time.split(':').map(Number);

//   if (modifier === 'PM' && hours !== 12) {
//     hours += 12;
//   } else if (modifier === 'AM' && hours === 12) {
//     hours = 0;
//   }

//   return `${String(hours).padStart(2, '0')}:${String(minutes || 0).padStart(2, '0')}:00`;
// }

// function parseQuery(query) {
//   if (query.includes('online between')) {
//     const times = query.match(/between (\d{1,2}(:\d{2})? [APM]{2}) and (\d{1,2}(:\d{2})? [APM]{2})/);
//     if (times) {
//       const startTime = parseTime(times[1]);
//       const endTime = parseTime(times[3]);
//       return `SELECT * FROM "Employee" WHERE check_in_time >= '1970-01-01T${startTime}' AND check_out_time <= '2050-01-01T${endTime}'`;
//     }
//   }
//   return 'SELECT * FROM "Employee"';
// }

// module.exports = {
//   parseTime,
//   parseQuery
// };

const nlp = require('compromise');

function parseTime(timeString) {
  const [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes || 0).padStart(2, '0')}:00`;
}

function parseDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function parseQuery(query) {
  let sql = 'SELECT * FROM "Employee" WHERE 1=1';
  let conditions = [];

  // Online between times
  if (query.toLowerCase().includes('online between')) {
    const times = query.match(/between (\d{1,2}(:\d{2})? [APM]{2}) and (\d{1,2}(:\d{2})? [APM]{2})/i);
    if (times) {
      const startTime = parseTime(times[1]);
      const endTime = parseTime(times[3]);
      conditions.push(`check_in_time::time >= '${startTime}' AND check_out_time::time <= '${endTime}'`);
    }
  }

  // Specific date
  const dateMatch = query.match(/on (\d{4}-\d{2}-\d{2})/i);
  if (dateMatch) {
    const date = parseDate(dateMatch[1]);
    conditions.push(`DATE(check_in_time) = '${date}'`);
  }

  // Employee ID
  const idMatch = query.match(/employee id (\d+)/i);
  if (idMatch) {
    const employeeId = idMatch[1];
    conditions.push(`employee_id = ${employeeId}`);
  }

  // Employee Name
  const nameMatch = query.match(/employee name (\w+)/i);
  if (nameMatch) {
    const employeeName = nameMatch[1];
    conditions.push(`employee_name ILIKE '%${employeeName}%'`);
  }

  // Combining all conditions
  if (conditions.length > 0) {
    sql += ' AND ' + conditions.join(' AND ');
  }

  return sql;
}

module.exports.parseQuery = parseQuery;
