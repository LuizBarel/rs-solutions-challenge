import api from '@/lib/api';

export const authUser = async (
    email: string,
    password: string,
    login: Function,
) => {
    try {
        const response = await api.post('/auth/signin', {
            email,
            password,
        });

        if (response.data) {
            const token = response.data.accessToken;

            login(token);
            return token;
        } else {
            console.log('Erro ao fazer login.');
        }
    } catch (error) {
        console.error(error);
    }
};
