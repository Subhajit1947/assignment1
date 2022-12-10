import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Blog from './component/Blog';
import Contact from './component/Contact';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
