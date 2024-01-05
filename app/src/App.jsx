import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import ContextProvider from "./Context/ContextProvider";
import HomeLayout from "./Pages/HomeLayout.jsx";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import LogIn from "./Pages/LogIn";
import { AuthProvider } from "./Context/AuthContext";
import AppLayout from "./Pages/AppLayout.jsx";

function App() {
  return (
    <ContextProvider>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/pricing" element={<Pricing/>}></Route>
                <Route path="/product" element={<Product/>}></Route>
                <Route path="login" element={<LogIn/>}></Route>
              </Route>
              <Route path="/app" element={<AppLayout/>}></Route>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
    </ContextProvider>
  )
}

export default App
