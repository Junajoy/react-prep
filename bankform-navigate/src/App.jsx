import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanForm from './LoanForm';
import Welcome from './Welcome';
import Error from './Error';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanForm />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;