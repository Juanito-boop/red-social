"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native"
import { useAuth } from "@/app/context/AuthContext"

export default function LoginScreen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor ingresa usuario y contraseña")
      return
    }

    setLoading(true)
    try {
      await login(username, password)
    } catch (error) {
      Alert.alert("Error", "Credenciales incorrectas")
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/733/733579.png" }} style={styles.logo} />
        <Text style={styles.title}>MicroBlog</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? "Iniciando sesión..." : "Iniciar Sesión"}</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>Prueba con: admin/admin (administrador) o user/user (usuario normal)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f8fa",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1DA1F2",
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#e1e8ed",
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#1DA1F2",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  hint: {
    marginTop: 20,
    textAlign: "center",
    color: "#657786",
    fontSize: 12,
  },
})
