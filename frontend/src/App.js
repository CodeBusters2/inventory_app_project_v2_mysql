import './App.css';
import  HomePage  from './pages/HomePage';
import Users from './pages/Users';
import User from './pages/User';
import EditUser from './pages/EditUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<Users  />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
