import {api, requetConfig} from '../utils/config'

//Register an user

const register = async(data) => {
    const config = requetConfig("POST", data)

    try {
        const res = await fetch(api + "/users/register", config).then((res) => res.json()).catch((err)=>err);
        if(res) {
            localStorage.setItem('user', JSON.stringify(res));
        }
    } catch (error) {
        console.log(error)
    }
}

const authService = {
    register
}

export default authService