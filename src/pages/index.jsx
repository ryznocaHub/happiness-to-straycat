import Login from "./auth/Login"
import { Register } from "./auth/register"
import { IndexPet } from "./pet/IndexPet"
import User from "./user"
const Auth = {
    "Login" : <Login/>,
    "Register" : <Register/>
}

export {Auth, User, IndexPet}