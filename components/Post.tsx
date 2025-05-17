"use client";

import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/app/context/AuthContext";

type PostProps = {
	post: {
		id: string;
		author: {
			id: string;
			username: string;
			avatar: string;
			isAdmin: boolean;
		};
		content: string;
		image?: string;
		createdAt: string;
		likes: number;
		comments: number;
		liked: boolean;
	};
	onLike: (id: string) => void;
};

export default function Post({ post, onLike }: PostProps) {
	const navigation = useNavigation();
	const { user } = useAuth();
	const [liked, setLiked] = useState(post.liked);
	const [likesCount, setLikesCount] = useState(post.likes);

	const handleLike = () => {
		setLiked(!liked);
		setLikesCount(liked ? likesCount - 1 : likesCount + 1);
		onLike(post.id);
	};

	const handleCommentPress = () => {
		// @ts-ignore - Navegación tipada requeriría más configuración
		navigation.navigate("PostDetail", { postId: post.id });
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("es-ES", {
			day: "numeric",
			month: "short",
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.userInfo}>
					<Image source={{ uri: post.author.avatar }} style={styles.avatar} />
					<View>
						<View style={styles.nameContainer}>
							<Text style={styles.username}>{post.author.username}</Text>
							{post.author.isAdmin && (
								<View style={styles.adminBadge}>
									<Text style={styles.adminText}>Admin</Text>
								</View>
							)}
						</View>
						<Text style={styles.date}>{formatDate(post.createdAt)}</Text>
					</View>
				</View>
				<TouchableOpacity>
					<MoreHorizontal size={18} color="#657786" />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<Text style={styles.contentText}>{post.content}</Text>
				{post.image && (
					<Image
						source={{ uri: post.image }}
						style={styles.contentImage}
						resizeMode="cover"
					/>
				)}
			</View>

			<View style={styles.actions}>
				<TouchableOpacity style={styles.actionButton} onPress={handleLike}>
					<Heart
						size={18}
						color={liked ? "#E0245E" : "#657786"}
						fill={liked ? "#E0245E" : "transparent"}
					/>
					{likesCount > 0 && (
						<Text style={[styles.actionText, liked && styles.likedText]}>
							{likesCount}
						</Text>
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.actionButton}
					onPress={handleCommentPress}
				>
					<MessageCircle size={18} color="#657786" />
					{post.comments > 0 && (
						<Text style={styles.actionText}>{post.comments}</Text>
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderBottomColor: "#E1E8ED",
		padding: 15,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 10,
	},
	userInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	nameContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	username: {
		fontWeight: "bold",
		fontSize: 15,
		marginRight: 5,
	},
	adminBadge: {
		backgroundColor: "#1DA1F2",
		borderRadius: 4,
		paddingHorizontal: 5,
		paddingVertical: 2,
	},
	adminText: {
		color: "white",
		fontSize: 10,
		fontWeight: "bold",
	},
	date: {
		color: "#657786",
		fontSize: 12,
	},
	content: {
		marginBottom: 10,
	},
	contentText: {
		fontSize: 15,
		lineHeight: 22,
		marginBottom: 10,
	},
	contentImage: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},
	actions: {
		flexDirection: "row",
		marginTop: 10,
	},
	actionButton: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 20,
	},
	actionText: {
		marginLeft: 5,
		fontSize: 13,
		color: "#657786",
	},
	likedText: {
		color: "#E0245E",
	},
});
