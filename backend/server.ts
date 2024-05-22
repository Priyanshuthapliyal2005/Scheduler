

// import express from 'express';
// import bodyParser from 'body-parser';
// import { PrismaClient } from '@prisma/client';
// import { parseQuery } from './nlp';
// import cors from 'cors'; // Import cors middleware

// const prisma = new PrismaClient();
// const app = express();
// require('dotenv').config();


// app.use(bodyParser.json());

// // Enable CORS for all routes
// app.use(cors());

// app.get('/api/employees', async (req, res) => {
//   try {
//     const employees = await prisma.employee.findMany();
//     res.json(employees);
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/api/employees', async (req, res) => {
//   const { name, email, checkInTime, checkOutTime } = req.body;
//   try {
//     const newEmployee = await prisma.employee.create({
//       data: {
//         name,
//         email,
//         check_in_time: checkInTime,
//         check_out_time: checkOutTime,
//       },
//     });
//     res.status(201).json(newEmployee);
//   } catch (error) {
//     console.error('Error creating employee:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/api/query', async (req, res) => {
//   const { query } = req.body;

//   try {
//     const sqlQuery = parseQuery(query);
//     const result = await prisma.$queryRawUnsafe(sqlQuery);
//     res.status(200).json(result);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).json({ error: 'Error executing query' });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });






import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import { parseQuery } from './nlp';
import cors from 'cors';
require('dotenv').config();  // Load environment variables

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/employees', async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/employees', async (req, res) => {
  const { name, email, checkInTime, checkOutTime } = req.body;
  try {
    const newEmployee = await prisma.employee.create({
      data: {
        name,
        email,
        check_in_time: new Date(checkInTime),
        check_out_time: new Date(checkOutTime),
      },
    });
    res.status(201).json(newEmployee);
  } catch (error: any) { // Specify the type of 'error' as 'any'
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      // Handle unique constraint violation on email field
      console.error('Error creating employee:', error);
      res.status(400).json({ error: 'Email address already exists' });
    } else {
      // Handle other errors
      console.error('Error creating employee:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});


app.post('/api/query', async (req, res) => {
  const { query } = req.body;
  console.log('Received query:', query); // Log the received query
  try {
    const sqlQuery = parseQuery(query);
    console.log('SQL query:', sqlQuery); // Log the parsed SQL query
    const result = await prisma.$queryRawUnsafe(sqlQuery);
    console.log('Query result:', result); // Log the query result
    res.status(200).json(result);
  } catch (error: any) { // Specify the type of 'error' as 'any'
    console.error('Error executing query:', error.message);
    res.status(500).json({ error: 'Error executing query', details: error.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
