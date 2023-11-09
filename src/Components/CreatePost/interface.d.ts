export interface CreatePost {
    showCamera?: boolean,
    sourceImage?: string
}

export interface GenericIcon {
    IconsProps:{
        name: string,
        color: string,
        size: number,
    }
    onPress: () => void,
}
