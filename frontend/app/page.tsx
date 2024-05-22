"use client"; // Ensure the top-level component is a client component if it uses client components

import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import QueryResult from './components/QueryResult';
import axios from 'axios';

const Home: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);

  const handleQuerySubmit = async (query: string) => {
    try {
      const response = await axios.post('http://localhost:3000/api/query', { query });
      console.log('Response:', response); // Log the response from the server
      setResults(response.data);
    } catch (error) {
      console.error('Error submitting query:', error);
    }
  };
  

  return (
    <div className="container">
      <h1>Employee Attendance</h1>
      <QueryInput onSubmit={handleQuerySubmit} />
      <QueryResult results={results} />
    </div>
  );
};

export default Home;
