'use client';

import api from '@/lib/api';
import Cookies from 'js-cookie';

import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    data: { token: string };
    login: (token: string, username: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState(() => {
        const storedToken = Cookies.get('sessionToken') ?? '';
        const storedUsername = Cookies.get('sessionUsername') ?? '';
        return { token: storedToken, username: storedUsername };
    });

    const login = (token: string, username: string) => {
        setData({ token, username });

        Cookies.set('sessionToken', token, { expires: 7 });
        Cookies.set('sessionUsername', username, { expires: 7 });
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        window.location.href = '/';
    };

    const logout = () => {
        setData({ token: '', username: '' });

        Cookies.remove('sessionToken');
        Cookies.remove('sessionUsername');
        delete api.defaults.headers.common['Authorization'];

        window.location.href = '/login';
    };

    useEffect(() => {
        const storedToken = Cookies.get('sessionToken') ?? '';
        const storedUsername = Cookies.get('sessionUsername') ?? '';

        if (storedToken) {
            setData({ token: storedToken, username: storedUsername });
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
