import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navlayout from "./components/Nav/NavLayout";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import Profile from "./views/Profile/Profile";
import DepoHistory from "./views/DepoHistory/DepoHistory";
import WithHistory from "./views/WithHistory/WithHistory";
import Witdraw from "./views/Withdraw/Witdraw";

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
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/deposits" element={<DepoHistory/>}/>
              <Route path="/withdrawals" element={<WithHistory/>}/>
              <Route path="/withdraw" element={<Witdraw/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
