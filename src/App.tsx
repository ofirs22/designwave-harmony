import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './pages/front/Home';
import Packages from './pages/front/Packages';

const App: React.FC = () => {
  // Temporary userId for development - in production this should come from auth
  const userId = "temp-user-id";

  return (
    <Router>
      <Layout userId={userId}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;