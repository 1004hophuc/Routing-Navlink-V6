
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ReactRouter/Home';
import Contact from './ReactRouter/Contact';
import About from './ReactRouter/About';
import Profile from './ReactRouter/Profile';
import ErrorPage from './ReactRouter/ErrorPage';
import Header from './ReactRouter/Header/Header';
import Login from './ReactRouter/Login';
import Detail from './ReactRouter/Detail';
import Private from './ReactRouter/Private';
import Modal from './HOC/ModalHOC/Modal';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Modal />
      <Routes>


        <Route path='/home' element={<Home />}></Route>

        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/private' element={<Private />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
