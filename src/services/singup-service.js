import axios from 'axios'
export const signupHandler = async (name, number, email, password) => {
    try {
        const response = await axios.post(
            "https://travel-app-backend-jrcu.onrender.com/api/auth/register",
            {
                username: name,
                number: number,
                email: email,
                password: password
            }
        );
        console.log("Success:", response.data);
        return response.data;
    } catch (err) {
        console.error("Signup error:", err.response?.data || err.message);
        throw err;
    }
}