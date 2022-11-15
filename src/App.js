
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoginReg from './component/Pages/auth/LoginReg';
import Home from './component/Pages/Home';
import Layout from './component/Pages/Layout';
import Contact from './component/Pages/Contact';
import About from './component/Pages/auth/About';
// import LoginReg from './components/Pages/auth/LoginReg'
// import Home from './components/Pages/Home'
// import Layout from './components/Pages/Layout'
// import Contact from './components/Pages/Contact'
// import About from './components/Pages/auth/About'


function App() {
  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />}  />
    <Route path="contact" element={<Contact />} />
    <Route path="login" element={<LoginReg />} />
    <Route path="about" element={<About />} />


  </Route>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
