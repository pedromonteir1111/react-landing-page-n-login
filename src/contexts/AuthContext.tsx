import { createContext, ReactNode, useContext, useState } from "react"
import { User } from "../types/User"

interface AuthContextType {
    user: User | null
    login: (name:string, email: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const login = (name: string, email: string) => {
        setUser({ name, email })
    }

    const logout = () => {
        setUser(null); // Remove o usuário
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider")
    }

    return context;
}
