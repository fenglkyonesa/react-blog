import { Route, Routes} from "react-router-dom";
import UserAuthForm from "./components/UserAuthFormModel.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (

        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path={"/sign-in"} element={<UserAuthForm props={"sign-in"}/>}/>
                <Route path={"/sign-up"} element={<UserAuthForm props={"sign-up"}/>}/>
            </Route>
        </Routes>
    )
}

export default App;