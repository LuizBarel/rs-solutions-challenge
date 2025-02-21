'use client';

import api from '@/lib/api';
import Cookies from 'js-cookie';

import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    data: { token: string };
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState(() => {
        const storedToken = Cookies.get('sessionToken');
        return { token: storedToken || '' };
    });

    const login = (token: string) => {
        setData({ token });

        Cookies.set('sessionToken', token, { expires: 7 });
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        window.location.href = '/';
    };

    const logout = () => {
        setData({ token: '' });

        Cookies.remove('sessionToken');
        delete api.defaults.headers.common['Authorization'];

        window.location.href = '/login';
    };

    useEffect(() => {
        const storedToken = Cookies.get('sessionToken');

        if (storedToken) {
            setData({ token: storedToken });
            api.defaults.headers.common['Authorization'] =
                `Bearer ${storedToken}`;
        }
    }, []);

    return (
        <AuthContext.Provider value={{ data, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
