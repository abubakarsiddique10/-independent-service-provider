import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Courses from './Pages/Courses/Courses/Courses';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App;
