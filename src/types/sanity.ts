
// types/sanity.ts

export type NavigationChild = {
    title: string
    hidden?: boolean
    slug?: string
    url?: string
}

export type NavigationItem = {
    title: string
    hidden?: boolean
    slug?: string
    url?: string
    children?: NavigationChild[]
}

export type SiteSettings = {
    logo?: {
        asset?: {
            url: string
        }
        alt?: string
    }
    navigation?: NavigationItem[]
    socials?: {
        icon: string
        url: string
    }[]
}
