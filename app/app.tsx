"use client"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Home, User } from "lucide-react-native"

// Screens
import FeedScreen from "@/screens/FeedScreen"
import ProfileScreen from "@/screens/ProfileScreen"
import PostDetailScreen from "@/screens/PostDetailScreen"
import LoginScreen from "@/screens/LoginScreen"

// Context
import { AuthProvider, useAuth } from "./context/AuthContext"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Feed") {
            return <Home size={size} color={color} />
          } else if (route.name === "Profile") {
            return <User size={size} color={color} />
          }
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function AppNavigator() {
  const { user } = useAuth()

  return (
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
            <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: "Publicación" }} />
          </>
        )}
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  )
}
