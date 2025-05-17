// Datos de ejemplo para la aplicación

export const mockPosts = [
  {
    id: "post1",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content:
      "¡Bienvenidos a nuestra nueva plataforma de microblogging! Estamos emocionados de compartir noticias y actualizaciones con todos ustedes. #NuevoProyecto",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    createdAt: "2023-05-15T10:30:00Z",
    likes: 24,
    comments: 5,
    liked: false,
  },
  {
    id: "post2",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content:
      "Hoy estamos lanzando nuevas funcionalidades en nuestra plataforma. Ahora los usuarios pueden reaccionar y comentar en las publicaciones. ¡Pruébenlo y déjennos saber qué les parece!",
    createdAt: "2023-05-16T14:45:00Z",
    likes: 18,
    comments: 3,
    liked: true,
  },
  {
    id: "post3",
    author: {
      id: "admin2",
      username: "moderador",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      isAdmin: true,
    },
    content:
      "Recordatorio: Mantengan las conversaciones respetuosas. Estamos aquí para crear una comunidad positiva donde todos puedan participar.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    createdAt: "2023-05-17T09:15:00Z",
    likes: 32,
    comments: 7,
    liked: false,
  },
  {
    id: "post4",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content:
      "¿Qué funcionalidades les gustaría ver en nuestra próxima actualización? Estamos recopilando ideas para mejorar la experiencia de todos.",
    createdAt: "2023-05-18T16:20:00Z",
    likes: 15,
    comments: 12,
    liked: false,
  },
  {
    id: "post5",
    author: {
      id: "admin2",
      username: "moderador",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      isAdmin: true,
    },
    content: "Hoy celebramos nuestro primer mes online. ¡Gracias a todos por ser parte de esta comunidad! #Aniversario",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    createdAt: "2023-05-19T11:00:00Z",
    likes: 45,
    comments: 8,
    liked: true,
  },
  {
    id: "post6",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content:
      "Estamos trabajando en mejorar la velocidad de carga de la aplicación. Pronto verán mejoras significativas en el rendimiento.",
    createdAt: "2023-05-20T13:40:00Z",
    likes: 12,
    comments: 2,
    liked: false,
  },
  {
    id: "post7",
    author: {
      id: "admin2",
      username: "moderador",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      isAdmin: true,
    },
    content:
      'Nuevo tutorial disponible: "Cómo sacar el máximo provecho de nuestra plataforma". Revisa el enlace en nuestro perfil.',
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR3aXR0ZXJ8ZW58MHx8MHx8fDA%3D",
    createdAt: "2023-05-21T10:10:00Z",
    likes: 28,
    comments: 4,
    liked: false,
  },
  {
    id: "post8",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content:
      "¡Acabamos de superar los 1000 usuarios! Gracias por confiar en nosotros y ser parte de esta comunidad en crecimiento.",
    createdAt: "2023-05-22T15:30:00Z",
    likes: 56,
    comments: 11,
    liked: true,
  },
  {
    id: "post9",
    author: {
      id: "admin2",
      username: "moderador",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      isAdmin: true,
    },
    content:
      "Recordatorio: Actualicen la aplicación a la última versión para disfrutar de todas las nuevas funcionalidades y correcciones de errores.",
    createdAt: "2023-05-23T09:45:00Z",
    likes: 19,
    comments: 3,
    liked: false,
  },
  {
    id: "post10",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content:
      "Estamos planeando un evento virtual para conectar con nuestra comunidad. ¿Qué temas les gustaría que abordáramos?",
    image:
      "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    createdAt: "2023-05-24T14:20:00Z",
    likes: 34,
    comments: 15,
    liked: false,
  },
]

export const mockComments = [
  {
    id: "comment1",
    postId: "post1",
    author: {
      id: "user1",
      username: "usuario",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      isAdmin: false,
    },
    content: "¡Esto es genial! Estoy emocionado de ver cómo evoluciona la plataforma.",
    createdAt: "2023-05-15T11:00:00Z",
  },
  {
    id: "comment2",
    postId: "post1",
    author: {
      id: "user2",
      username: "maria",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      isAdmin: false,
    },
    content: "Me encanta el diseño, muy intuitivo y fácil de usar.",
    createdAt: "2023-05-15T11:30:00Z",
  },
  {
    id: "comment3",
    postId: "post1",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content: "¡Gracias por sus comentarios! Estamos trabajando duro para mejorar constantemente.",
    createdAt: "2023-05-15T12:15:00Z",
  },
  {
    id: "comment4",
    postId: "post1",
    author: {
      id: "user3",
      username: "carlos",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      isAdmin: false,
    },
    content: "¿Habrá una versión para iOS pronto?",
    createdAt: "2023-05-15T14:20:00Z",
  },
  {
    id: "comment5",
    postId: "post1",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content: "Sí, estamos trabajando en la versión para iOS. Debería estar disponible en las próximas semanas.",
    createdAt: "2023-05-15T15:00:00Z",
  },
  {
    id: "comment6",
    postId: "post2",
    author: {
      id: "user1",
      username: "usuario",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      isAdmin: false,
    },
    content: "Las nuevas funcionalidades son increíbles. Especialmente me gusta poder reaccionar a las publicaciones.",
    createdAt: "2023-05-16T15:10:00Z",
  },
  {
    id: "comment7",
    postId: "post2",
    author: {
      id: "user4",
      username: "laura",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      isAdmin: false,
    },
    content: "¿Podrían agregar más tipos de reacciones en el futuro?",
    createdAt: "2023-05-16T16:30:00Z",
  },
  {
    id: "comment8",
    postId: "post2",
    author: {
      id: "admin1",
      username: "admin",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      isAdmin: true,
    },
    content: "Definitivamente estamos considerando agregar más tipos de reacciones. ¡Gracias por la sugerencia!",
    createdAt: "2023-05-16T17:15:00Z",
  },
  {
    id: "comment9",
    postId: "post3",
    author: {
      id: "user2",
      username: "maria",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      isAdmin: false,
    },
    content: "Totalmente de acuerdo. El respeto es fundamental para mantener una comunidad saludable.",
    createdAt: "2023-05-17T09:45:00Z",
  },
  {
    id: "comment10",
    postId: "post3",
    author: {
      id: "user5",
      username: "pedro",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      isAdmin: false,
    },
    content: "¿Tienen alguna política específica sobre el contenido que se puede publicar?",
    createdAt: "2023-05-17T10:30:00Z",
  },
  {
    id: "comment11",
    postId: "post3",
    author: {
      id: "admin2",
      username: "moderador",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      isAdmin: true,
    },
    content:
      'Sí, tenemos directrices comunitarias detalladas. Puedes encontrarlas en la sección de "Acerca de" en nuestro perfil.',
    createdAt: "2023-05-17T11:00:00Z",
  },
  {
    id: "comment12",
    postId: "post4",
    author: {
      id: "user1",
      username: "usuario",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      isAdmin: false,
    },
    content: "Me gustaría ver una función para guardar publicaciones favoritas.",
    createdAt: "2023-05-18T16:45:00Z",
  },
  {
    id: "comment13",
    postId: "post4",
    author: {
      id: "user3",
      username: "carlos",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      isAdmin: false,
    },
    content: "Sería genial tener notificaciones personalizables.",
    createdAt: "2023-05-18T17:20:00Z",
  },
  {
    id: "comment14",
    postId: "post4",
    author: {
      id: "user4",
      username: "laura",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      isAdmin: false,
    },
    content: "¿Qué tal una función para programar publicaciones? Sería útil para los administradores.",
    createdAt: "2023-05-18T18:10:00Z",
  },
  {
    id: "comment15",
    postId: "post5",
    author: {
      id: "user2",
      username: "maria",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      isAdmin: false,
    },
    content: "¡Felicidades por el primer mes! Ha sido una gran experiencia hasta ahora.",
    createdAt: "2023-05-19T11:30:00Z",
  },
]
export default { mockPosts, mockComments }