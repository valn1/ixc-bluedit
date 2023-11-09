import "styled-components/native"

declare module "styled-components/native" {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,

            backgound: string,
            text: string
        }
    }
}
