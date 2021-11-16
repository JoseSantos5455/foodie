import React from 'react';
import ErrorBoundary from '../../modules/ErrorBoundary';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>
        this is home page
        <div className="h-8 bg-yellow-500"></div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
