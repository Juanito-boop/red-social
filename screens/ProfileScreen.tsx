"use client"
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LogOut } from "lucide-react-native"
import { useAuth } from "@/app/context/AuthContext"

export default function ProfileScreen() {
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No has iniciado sesión</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <LogOut size={20} color="#657786" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.profileHeader}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.username}>@{user.username}</Text>
          {user.isAdmin && (
            <View style={styles.adminBadge}>
              <Text style={styles.adminText}>Administrador</Text>
            </View>
          )}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Información</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Tipo de cuenta:</Text>
            <Text style={styles.infoValue}>{user.isAdmin ? "Administrador" : "Usuario estándar"}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Permisos:</Text>
            <Text style={styles.infoValue}>
              {user.isAdmin ? "Publicar, comentar, reaccionar" : "Comentar, reaccionar"}
            </Text>
          </View>
        </View>

        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Actividad</Text>
          {user.isAdmin ? (
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Publicaciones</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>48</Text>
                <Text style={styles.statLabel}>Comentarios</Text>
              </View>
            </View>
          ) : (
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>23</Text>
                <Text style={styles.statLabel}>Comentarios</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>56</Text>
                <Text style={styles.statLabel}>Reacciones</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  header: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E8ED",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 5,
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  adminBadge: {
    backgroundColor: "#1DA1F2",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  adminText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  infoSection: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#14171A",
  },
  infoItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoLabel: {
    width: 120,
    fontSize: 14,
    color: "#657786",
  },
  infoValue: {
    flex: 1,
    fontSize: 14,
  },
  activitySection: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 15,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1DA1F2",
  },
  statLabel: {
    fontSize: 14,
    color: "#657786",
  },
})
