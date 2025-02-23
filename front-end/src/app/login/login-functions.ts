import api from '@/lib/api';

export const authUser = async (
    email: string,
    password: string,
    login: (token: string, username: string) => void,
    setErrorMessage: (message: string) => void,
) => {
    try {
        const response = await api.post('/auth/signin', {
            email,
            password,
        });

        if (response.data.accessToken) {
            const token = response.data.accessToken;
            const username = response.data.username;

            login(token, username);
            return token;
        } else if (response.data.status === 400) {
            setErrorMessage(response.data.message);
        } else {
            setErrorMessage(response.data);
        }
    } catch (error) {
        console.error(error);
    }
};
