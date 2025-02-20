import api from '@/lib/api';

export const createUser = async (
    name: string,
    email: string,
    password: string,
) => {
    try {
        const response = await api.post('/auth/signup', {
            name,
            email,
            password,
        });

        if (response.data) {
            return response.data.message;
        } else {
            console.log('Erro ao criar conta.');
        }
    } catch (error) {
        console.error(error);
    }
};
