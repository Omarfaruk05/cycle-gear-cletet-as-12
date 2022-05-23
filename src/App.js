import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import HomePage from './Pages/Home/HomePage';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Register from './Pages/Login/Register';
import Purchase from './Pages/Purchase/Purchase';
import ProtectedRoute from './Pages/PortectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/purchase/:id' element={
            <ProtectedRoute>
              <Purchase></Purchase>
            </ProtectedRoute>
          }></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
