"use client"

import { useState, useEffect, useCallback } from "react"
import { View, FlatList, StyleSheet, RefreshControl, ActivityIndicator, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Plus } from "lucide-react-native"
import Post from "../components/Post"
import { useAuth } from "@/app/context/AuthContext"
import { mockPosts } from "@/app/data/mockData"

export default function FeedScreen({ navigation }: any) {
  const { user } = useAuth()
  const [posts, setPosts] = useState<any[]>([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  // Simular carga de posts
  const fetchPosts = useCallback(async (pageNum = 1, refresh = false) => {
    // En una app real, haríamos una petición a un API
    // Simulamos delay de red
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const postsPerPage = 5
    const start = (pageNum - 1) * postsPerPage
    const end = start + postsPerPage
    const newPosts = mockPosts.slice(start, end)

    if (refresh) {
      setPosts(newPosts)
    } else {
      setPosts((prev) => [...prev, ...newPosts])
    }

    setHasMore(end < mockPosts.length)
    setLoading(false)
    setRefreshing(false)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleRefresh = () => {
    setRefreshing(true)
    setPage(1)
    fetchPosts(1, true)
  }

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setLoading(true)
      const nextPage = page + 1
      setPage(nextPage)
      fetchPosts(nextPage)
    }
  }

  const handleLike = (postId: string) => {
    // En una app real, enviaríamos esta acción al servidor
    console.log(`Post ${postId} liked/unliked`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MicroBlog</Text>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} onLike={handleLike} />}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && !refreshing ? (
            <View style={styles.loader}>
              <ActivityIndicator size="small" color="#1DA1F2" />
            </View>
          ) : null
        }
        ListEmptyComponent={
          !loading ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No hay publicaciones disponibles</Text>
            </View>
          ) : null
        }
      />

      {user?.isAdmin && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => {
            // En una app real, navegaríamos a la pantalla de crear post
            alert("Función para crear post (solo disponible para administradores)")
          }}
        >
          <Plus size={24} color="white" />
        </TouchableOpacity>
      )}
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1DA1F2",
  },
  loader: {
    padding: 20,
    alignItems: "center",
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    color: "#657786",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})
