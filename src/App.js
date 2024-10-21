
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import { Routes, Route } from 'react-router-dom';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';


function App() {
  
 
  return (
     <DataProvider>
      <div className="App">
      
          <Header title ="Social-Media-App" />
          <Nav/>     
      
          <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/post" element ={<NewPost/>}/>
                <Route path="/edit/:id" element={<EditPost/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Missing/>} />
          </Routes>
          
          <Footer/>
      
      </div>
     </DataProvider>  
  );
}

export default App;
