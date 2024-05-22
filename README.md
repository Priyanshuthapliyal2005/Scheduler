# Scheduler

Scheduler is a web application for managing employee attendance. It is built using Next.js for the frontend and Node.js with Express for the backend. The application uses Tailwind CSS for styling and Prisma for database management.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Styling](#styling)
- [Usage](#usage)
- [License](#license)

## Installation

Follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js and npm installed
- PostgreSQL or another supported database installed and running

### Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend

   
2. Install the dependencies:

   ```bash
    npm install

3.Set up the database by configuring the .env file with your database credentials:

      DATABASE_URL="your-database-url"
    
    
4.Run the Prisma migrations to set up the database schema:

      npx prisma migrate dev

5.Start the backend server:

    npm run dev

    
### Frontend Setup

1.Navigate to the frontend directory:

    cd frontend

2.Install the dependencies:

    npm install

3.Start the frontend development server:

    npm run dev

    
### Project Structure

scheduler

![image](https://github.com/Priyanshuthapliyal2005/Scheduler/assets/114170980/5393f454-4797-443e-a7c6-d0a60458c4d1)


### Scripts

Backend
npm run dev: Start the backend server in development mode.
npm run build: Build the backend for production.
npm start: Start the backend server in production mode.
Frontend
npm run dev: Start the frontend development server.
npm run build: Build the frontend for production.
npm start: Start the frontend server in production mode.


### API Endpoints

Backend
POST /api/query: Endpoint for handling queries.


### Styling
This project uses Tailwind CSS for styling. Tailwind CSS is configured in the tailwind.config.ts file located in the frontend directory.

To add Tailwind CSS to your components, import the styles in your main application entry point:

    import 'tailwindcss/tailwind.css';
Then, you can use Tailwind CSS classes in your components. For example:

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Employee Attendance</h1>
    </div>
    
### Usage
To use the application:

1.Ensure the backend server is running:
 
    cd backend
    npm run dev
    
2.Ensure the frontend server is running:

    cd frontend
    npm run dev

3.Open your browser and navigate to http://localhost:3000.


### License
This project is licensed under the MIT License.

This README file includes sections for installation, project structure, scripts, API endpoints, styling, usage, and licensing. Adjust any specific details or paths as needed to fit your project.
