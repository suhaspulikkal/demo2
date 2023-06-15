import Home from "./components/Home";
import { Routes, Route} from "react-router-dom"
import Profile from "./components/Profile";
import About from "./components/About"

function App() {
  return (
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/about' element={<About />}></Route>

        </Routes>
      
    );
}

export default App;

