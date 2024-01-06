import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import HomeLayout from "./Pages/HomeLayout.jsx";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import LogIn from "./Pages/LogIn";
import AppLayout from "./Pages/AppLayout.jsx";
import City from "./Pages/City.jsx";
import Countries from "./Pages/Countries.jsx";
import { MapProvider } from "./Context/MapContext.jsx";
import {AuthProvider} from "./Context/AuthContext.jsx"

function App() {
  return (
    <MapProvider>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/pricing" element={<Pricing/>}></Route>
                <Route path="/product" element={<Product/>}></Route>
                <Route path="login" element={<LogIn/>}></Route>
              </Route>
              <Route path="/app" element={<AppLayout/>}>
                <Route path="cities"  element={<City/>}></Route>
                <Route path="countries" element={<Countries/>}></Route>
              </Route>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
    </MapProvider>
  )
}

export default App
