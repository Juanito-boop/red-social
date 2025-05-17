"use client"
import { View, Text, Image, StyleSheet } from "react-native"
import { useAuth } from "@/app/context/AuthContext"

type CommentProps = {
  comment: {
    id: string
    author: {
      id: string
      username: string
      avatar: string
      isAdmin: boolean
    }
    content: string
    createdAt: string
  }
}

export default function Comment({ comment }: CommentProps) {
  const { user } = useAuth()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const isCurrentUser = user?.id === comment.author.id

  return (
    <View style={styles.container}>
      <Image source={{ uri: comment.author.avatar }} style={styles.avatar} />
      <View style={styles.commentContent}>
        <View style={styles.header}>
          <View style={styles.nameContainer}>
            <Text style={styles.username}>{comment.author.username}</Text>
            {comment.author.isAdmin && (
              <View style={styles.adminBadge}>
                <Text style={styles.adminText}>Admin</Text>
              </View>
            )}
            {isCurrentUser && (
              <View style={styles.userBadge}>
                <Text style={styles.userText}>Tú</Text>
              </View>
            )}
          </View>
          <Text style={styles.date}>{formatDate(comment.createdAt)}</Text>
        </View>
        <Text style={styles.content}>{comment.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E8ED",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 5,
  },
  adminBadge: {
    backgroundColor: "#1DA1F2",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
  },
  adminText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  userBadge: {
    backgroundColor: "#657786",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  userText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  date: {
    color: "#657786",
    fontSize: 12,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
  },
})
