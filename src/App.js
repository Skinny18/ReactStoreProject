import './App.css';
import { BrowserRouter, Routes, Route} from  'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
//components
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <SearchForm/>
        <Routes>
          <Route path="/"element={ <Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id" element={ <Product/>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/products/:id/info" element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
