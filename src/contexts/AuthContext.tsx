import { AxiosError, AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CommonHeaderProperties } from "../models/axios";
import { api } from "../services/api";

type SignInCredentials = {
    email: string;
    password: string;
};

interface AuthProps {
    children: React.ReactNode;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<number>;
    signOut(): void;
    user?: UserProps;
    isAuthenticated: boolean;
};

interface UserProps {
    idUsuario: number;
    nomeUsuario: string;
    email: string;
}

interface AuthState {
    user?: UserProps;
    token: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProps) {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@promo:token');
        const user = localStorage.getItem('@promo:user');

        if (token && user) {
            return { user: JSON.parse(user), token }
        }

        return {} as AuthState;
    });

    const isAuthenticated = !!data?.user;

    async function signIn({ email, password }: SignInCredentials) {
        console.log('EMAIL', email);
        try {
            const response = await api.post("/login", { email: email, senha: password });

            const userWithToken: AuthState = {
                token: response.data.token,
                user: response.data.user
            }

            if (response.status === 200) {
                toast.success(`Bem vindo ${userWithToken.user?.nomeUsuario} !`);

                localStorage.setItem('@promo:token', userWithToken.token);
                localStorage.setItem('@promo:user', JSON.stringify(userWithToken.user));

                api.defaults.headers = {
                    Authorization: `Bearer ${userWithToken.token}`,
                } as CommonHeaderProperties;

                setData({ user: userWithToken.user, token: userWithToken.token });
                return 200;
            }

            return 500;
        }
        catch (error: any) {
            toast.error(`Ocorreu um erro ao tentar efetuar login, tente novamente mais tarde!!`);
            return 500;
        }
    }

    function signOut() {
        localStorage.removeItem('@promo:token');
        localStorage.removeItem('@promo:user');

        setData({} as AuthState);
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
}