
const API_URL = 'http://127.0.0.1:8000/';


export const loginUser = async (loginData) => {
    const response = await fetch(`${API_URL}api/login`, {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    return data;
}

export const registerUser = async (registerData) => {
    const response = await fetch(`${API_URL}api/register`, {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    return data;
}
export const getUserData = async (token) => {
    const response = await fetch(`${API_URL}api/user`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Agrega el token JWT al encabezado
        }
    });
    console.log(response);
    const data = await response.json();
    return data;
}
