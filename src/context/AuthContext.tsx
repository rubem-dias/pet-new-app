import React, { createContext, useContext, useState } from 'react';
import mockUsers from '../test/mocks/mockUsers.json';
import { saveToken } from "../utils/secureStorage";

type User = {
    email: string;
};

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => false,
    logout: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {

        console.log(`Login attempt with email: ${email} and password: ${password}`);

        const user = mockUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            await saveToken("t");
            setUser(user);
            return true;
        }

        return false;
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
