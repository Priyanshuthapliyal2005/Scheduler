// // pages/index.tsx

// import React, { useState } from 'react';
// import QueryInput from '../components/QueryInput';
// import QueryResult from '../components/QueryResult';
// import axios from 'axios';

// const Home: React.FC = () => {
//   const [results, setResults] = useState<any[]>([]);

//   const handleQuerySubmit = async (query: string): Promise<void> => {
//     try {
//       const response = await axios.get('/api/employees', {
//         params: {
//           query: query
//         }
//       });
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error submitting query:', error);
//       // Handle error accordingly
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Employee Attendance</h1>
//       <QueryInput onSubmit={handleQuerySubmit} results={results} />
//       {/* <QueryResult results={results} /> */}
//     </div>
//   );
// };

// export default Home;

// pages/index.tsx
import Home from '../page';
export default Home;
