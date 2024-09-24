import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import CreateEditPage from './pages/CreateEditPage';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/posts/:id" element={<PostPage />} />
                    <Route path="/create" element={<CreateEditPage />} />
                    <Route path="/edit/:id" element={<CreateEditPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
