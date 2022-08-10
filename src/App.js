import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navlayout from "./components/Nav/NavLayout";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import OThome from "./ot/home";


function App() {
  return (
    <div className="bg-slate-50">
      <div className="bg-white h-full">
        <BrowserRouter>
          <Routes>
              <Route index element={<OThome/>}/>
              <Route element={<Navlayout/>}>
                <Route path="/home" element={<Home/>}/>
              </Route>  
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/dashboard/*" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;
