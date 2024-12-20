import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemSomos" element={<QuemSomos />} />
            <Route path="login" element={<Login />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default AppRoutes;