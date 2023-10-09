import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditAuthor from './components/EditAuthor.jsx';
import DisplayAll from './components/DisplayAll.jsx';
import AuthorForm from './components/AuthorForm.jsx';

const App = () => {
    
    return(
    	<BrowserRouter >
        <div >
          <Routes>
              <Route element={<DisplayAll/>} path="/authors"/>
              <Route element={<AuthorForm/>} path="/author/new"/>
              <Route element={<EditAuthor/>} path="/author/edit/:id"/>
          </Routes>
        </div>
    	</BrowserRouter>
    ) 
}
export default App;

