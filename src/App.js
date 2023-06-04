import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import CreateUser from './components/CreateUser';

import ListUser from './components/ListUser';
import './App.css';



function App() {
  
  return (
   <>
   <div className='app'>
    <h1> Front-end ReactJS Web Page with CRUD Operations </h1>

    <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          
        </Routes>
      </BrowserRouter>
   </div>
   </>
  
  );
}

export default App;
