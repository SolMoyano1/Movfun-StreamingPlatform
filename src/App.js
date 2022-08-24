import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Login from './components/Login';
import Home from './components/Home';
import ContentCategory from './components/ContentCategory';
import ContentDetails from './components/ContentDetails';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/ComedyMovies' element={<ContentCategory/>}/>
          <Route path='/RomanceMovies' element={<ContentCategory/>}/>
          <Route path='/DramaMovies' element={<ContentCategory/>}/>
          <Route path='/ThrillerMovies' element={<ContentCategory/>}/>
          <Route path='/ActionMovies' element={<ContentCategory/>}/>
          <Route path='/Details' element={<ContentDetails/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
