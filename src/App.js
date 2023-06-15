import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import { AuthContext, FirebaseContext } from './store/Context';
import { onAuthStateChanged } from 'firebase/auth';
import CreatePage from './Pages/CreatePage';
import ViewPostPage from './Pages/ViewPostPage';
import Post from './store/PostContext';
import Error from './Components/Error/Error';

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { auth } = useContext(FirebaseContext);
  // console.log('qwer:',user);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  },[]);
  return (
    <Post>
      <Router>
          <Routes>
          <Route exact path='/' element={<Home/>} errorElement={<Error/>}/>
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/login' element={<LogInPage/>} />
          <Route path='/create' element={<CreatePage/>} />
          <Route path='/view-post' element={<ViewPostPage/>} />
          </Routes>
      </Router>
    </Post>
  );
};

export default App;