export interface AppState {
    url: string[],
    rotetaImage: boolean,
    title: string,
    body: string
    publicacao: {
        title: string,
        body: string,
        email: string
    }[],
    asyncPost:{
        title: string,
        body: string,
        email: string
    }[],
    comentario: {
        email: string,
        body: string
    }[],
    albums: {
        url: string[],
        title: string,
        body?: string,
        email: string
    }[]
    update: boolean
    perfilOptions: {
        changeName: boolean,
        changeTheme: boolean
    }
    theme: string,
    newPost: boolean
}
