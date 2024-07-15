import axios from 'axios';

const API_URL = '/api/users';

const login = async (email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const { data } = await axios.post(`${API_URL}/login`, { email, password }, config);
    return data;
};

const register = async (name, email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const { data } = await axios.post(`${API_URL}/register`, { name, email, password }, config);
    return data;
};

export default { login, register };
