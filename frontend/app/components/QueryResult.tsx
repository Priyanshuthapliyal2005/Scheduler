// // components/QueryResult.tsx

import React from 'react';

interface QueryResultProps {
  results: any[];
}

const QueryResult: React.FC<QueryResultProps> = ({ results }) => {
  return (
    <div>
      <h2>Query Results:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{JSON.stringify(result)}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryResult;
