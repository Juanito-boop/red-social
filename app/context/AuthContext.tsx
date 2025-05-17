"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  username: string
  isAdmin: boolean
  avatar: string
}

type AuthContextType = {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Simular verificación de sesión al inicio
  useEffect(() => {
    // En una app real, verificaríamos token almacenado
    const checkSession = async () => {
      // Simulamos un usuario ya logueado para desarrollo
      // setUser({
      //   id: '1',
      //   username: 'usuario',
      //   isAdmin: false,
      //   avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      // });
    }

    checkSession()
  }, [])

  const login = async (username: string, password: string) => {
    // Simulación de login
    // En una app real, haríamos una petición a un API

    if (username === "admin" && password === "admin") {
      setUser({
        id: "1",
        username: "admin",
        isAdmin: true,
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      })
    } else if (username === "user" && password === "user") {
      setUser({
        id: "2",
        username: "usuario",
        isAdmin: false,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      })
    } else {
      throw new Error("Credenciales incorrectas")
    }
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}

export default AuthProvider
