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
import AppLayout from "./Pages/AppLayout";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";


function App() {
  return (
    <ContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/pricing" element={<Pricing/>}></Route>
              </Route>

            </Routes>
        </BrowserRouter>
    </ContextProvider>
  )
}

export default App
