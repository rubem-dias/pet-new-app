import React, { createContext, useContext, useEffect, useState } from 'react';
import mockUsers from '../test/mocks/mockUsers.json';
import { deleteToken, getToken, saveToken } from "../utils/secureStorage";
import { LoginCredentials } from "../types/auth";

type User = {
    email: string;
};

type AuthContextType = {
    user: User | null;
    login: (loginCredentials: LoginCredentials) => Promise<boolean>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => false,
    logout: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);

    const login = async (loginCredentials: LoginCredentials) => {

        const user = mockUsers.find(
            (u) => u.email === loginCredentials.email && u.password === loginCredentials.password
        );

        if (user) {
            await saveToken("asdad");
            setUser(user);
            return true;
        }

        return false;
    };

    const logout = async () => {
        await deleteToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
