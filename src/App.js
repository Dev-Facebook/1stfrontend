
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Alogin from "./components/body/Alogin"
// import Asignup from "./components/body/Asignup"
import Notfound from "./components/Notfound"

// import { useSelector, useDispatch } from "react-redux"
// import { increment } from "./redux/counter"

function App() {
  // const navigate = useNavigate();

  return (
    <>
    
      
      <Routes>
        <Route exact path='/' element={<Alogin />} />
        {/* <Route exact path='/admin/signup' element={<Asignup />} /> */}
        <Route exact path='*' element={<Notfound />} />
      </Routes>

    </>
  )
}

export default App
