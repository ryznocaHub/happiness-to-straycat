import Login from "./auth/Login"
import { IndexPet } from "./pet/IndexPet"
import { ShowUser } from "./user/ShowUser"


const User = {
    "Show" : <ShowUser/>
}
const Pet = {
    "Index" : <IndexPet/>
}

const Auth = {
    "Login" : <Login/>
}

export {Auth, User, Pet}