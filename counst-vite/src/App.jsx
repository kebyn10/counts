import { Route,Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Juegos from "./pages/juegos"
import NewUser from "./pages/NewUser"
import LoginUser from "./pages/LogInUser"
import NotFound from "./pages/NotFound"
import NewGame from "./pages/NewGame"
import Clou from "./pages/Subiendo"


 function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Inicio />} />
     <Route path="/juegos" element={<Juegos />} />
     <Route path="/newUser" element={<NewUser />}/>
     <Route path="/newGame" element={<NewGame />}/>
     <Route path="/logUser" element={<LoginUser />}/>
     <Route path="/clou" element={<Clou />}/>
     <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}
export default App
