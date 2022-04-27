import React from 'react';

const Results = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <p>{result.title}</p>
      ))}
    </div>
  );
};

export default Results;
