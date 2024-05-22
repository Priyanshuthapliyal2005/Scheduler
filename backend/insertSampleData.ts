// insertSampleData.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Insert sample data into the Employee table
    await prisma.employee.createMany({
      data: [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          check_in_time: new Date('2024-05-20T10:00:00Z'),
          check_out_time: new Date('2024-05-20T17:00:00Z'),
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          check_in_time: new Date('2024-05-20T09:30:00Z'),
          check_out_time: new Date('2024-05-20T16:30:00Z'),
        },
        // Add more sample data as needed
      ],
    });

    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    await prisma.$disconnect(); // Disconnect the Prisma Client
  }
}

main().catch(console.error);
