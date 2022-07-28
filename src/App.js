import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navlayout from "./components/Nav/NavLayout";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Dashboard from "./views/Dashboard/Dashboard";


function App() {
  return (
    <div className="bg-slate-50">
      <div className="bg-white h-full">
        <BrowserRouter>
          <Routes>
              <Route element={<Navlayout/>}>
                <Route index element={<Home/>}/>
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
