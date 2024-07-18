import axios from 'axios';



const login = async (email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const { data } = await axios.post(`http://localhost:5000/api/users/login`, { email, password }, config);
    return data;
};

const register = async (name, email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const { data } = await axios.post(`http://localhost:5000/api/users/register`, { name, email, password }, config);
    return data;
};

export default { login, register };
