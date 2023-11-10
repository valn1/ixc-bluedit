export interface ButtonProps {
    name: string
    color: boolean
    onPress: () => void
}

export interface AsyncPosts{
    postagens: {
        title: string,
        body: string,
        email: string
        url: string[]
    }[],
    comentario: {
        body: string,
        email: string,
    }[]
}

export interface ExcludePosts{
    id: string
}


export interface OptionButton{
    iconName: string,
    buttonName: string,
    onPress?: () => {}
}

