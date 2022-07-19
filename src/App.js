import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navlayout from "./components/Nav/NavLayout";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

function App() {
  return (
    <div className="bg-slate-50">
      <div className="bg-white w-5/6 mx-auto h-full">
        <BrowserRouter>
          <Routes>
              <Route element={<Navlayout/>}>
                <Route index element={<Home/>}/>
              </Route>  
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
