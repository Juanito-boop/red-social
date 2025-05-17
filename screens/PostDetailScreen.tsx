"use client"

import { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Send } from "lucide-react-native"
import Post from "../components/Post"
import Comment from "../components/Comment"
import { useAuth } from "@/app/context/AuthContext"
import { mockPosts, mockComments } from "@/app/data/mockData"

export default function PostDetailScreen({ route }: any) {
  const { postId } = route.params
  const { user } = useAuth()
  const [post, setPost] = useState<any>(null)
  const [comments, setComments] = useState<any[]>([])
  const [newComment, setNewComment] = useState("")
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    // Simular carga de post y comentarios
    const fetchPostAndComments = async () => {
      // En una app real, haríamos una petición a un API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const foundPost = mockPosts.find((p) => p.id === postId)
      if (foundPost) {
        setPost(foundPost)
      }

      // Filtrar comentarios para este post
      const postComments = mockComments.filter((c) => c.postId === postId)
      setComments(postComments)

      setLoading(false)
    }

    fetchPostAndComments()
  }, [postId])

  const handleLike = (id: string) => {
    // En una app real, enviaríamos esta acción al servidor
    console.log(`Post ${id} liked/unliked`)
  }

  const handleSubmitComment = async () => {
    if (!newComment.trim() || !user) return

    setSubmitting(true)

    // Simular envío de comentario
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Crear nuevo comentario
    const newCommentObj = {
      id: `comment-${Date.now()}`,
      postId,
      author: {
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        isAdmin: user.isAdmin,
      },
      content: newComment,
      createdAt: new Date().toISOString(),
    }

    // Actualizar lista de comentarios
    setComments((prev) => [newCommentObj, ...prev])

    // Actualizar contador de comentarios en el post
    if (post) {
      setPost({
        ...post,
        comments: post.comments + 1,
      })
    }

    // Limpiar campo de comentario
    setNewComment("")
    setSubmitting(false)
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1DA1F2" />
      </View>
    )
  }

  if (!post) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No se encontró la publicación</Text>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={comments}
          renderItem={({ item }) => <Comment comment={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <>
              <Post post={post} onLike={handleLike} />
              <View style={styles.commentsHeader}>
                <Text style={styles.commentsTitle}>Comentarios ({comments.length})</Text>
              </View>
            </>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No hay comentarios. ¡Sé el primero en comentar!</Text>
            </View>
          }
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un comentario..."
            value={newComment}
            onChangeText={setNewComment}
            multiline
          />
          <TouchableOpacity
            style={[styles.sendButton, (!newComment.trim() || submitting) && styles.disabledButton]}
            onPress={handleSubmitComment}
            disabled={!newComment.trim() || submitting}
          >
            <Send size={20} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#657786",
    textAlign: "center",
  },
  commentsHeader: {
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E1E8ED",
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    color: "#657786",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E1E8ED",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E1E8ED",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    maxHeight: 100,
    backgroundColor: "#F5F8FA",
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  disabledButton: {
    backgroundColor: "#AAB8C2",
  },
})
