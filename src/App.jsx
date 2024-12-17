import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App flex justify-center items-center h-[640px]">
      <Routes>
        <Route path='/' element={<StartPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
