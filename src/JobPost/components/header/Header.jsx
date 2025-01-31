import React from 'react';
import MainHeader from './MainHeader';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => <h1>Home</h1>;
const FindCandidate = () => <h1>FindCandidate</h1>;
const MyJobs = () => <h1>MyJobs</h1>;
const Applications = () => <h1>Applications</h1>;
const CustomerSupports = () => <h1>CustomerSupports</h1>;

const Header = () => {
  return (
    <Router>
      <div className="md:flex md:flex-col md:w-full shadow-sm">
        {/* Header */}
        <MainHeader />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-candidate" element={<FindCandidate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/customer-supports" element={<CustomerSupports />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
