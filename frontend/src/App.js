import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostsProvider from './Components/PostsProvider';
import HomePage from './Pages/HomePage';
import CreatePost from './Pages/CreatePost';
import ViewPost from './Pages/ViewPost';
import EditPost from './Pages/EditPost';

function App() {
  return (
    <div className="App">
      <PostsProvider>
        <Router>
          <Routes>
            <Route path='/' exact element={<HomePage />} ></Route>
            <Route path='/posts/new' element={<CreatePost />} ></Route>
            <Route path='/posts/edit/:id' element={<EditPost />} ></Route>
            <Route path='/posts/:id' element={<ViewPost />} ></Route>
          </Routes>
        </Router>
      </PostsProvider>
    </div>
  );
}

export default App;
