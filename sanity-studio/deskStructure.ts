
// deskStructure.ts
import { StructureResolver } from 'sanity/desk'

export const myStructure: StructureResolver = (S) =>
    S.list()
        .title('Studio')
        .items([
            // 🛠 SETTINGS GROUP
            S.listItem()
                .title('Settings')
                .child(
                    S.list()
                        .title('Settings')
                        .items([
                            S.listItem()
                                .title('Site Settings')
                                .schemaType('siteSettings')
                                .child(
                                    S.editor()
                                        .id('siteSettings')
                                        .schemaType('siteSettings')
                                        .documentId('siteSettings')
                                ),
                            S.listItem()
                                .title('Global SEO')
                                .schemaType('globalSeo')
                                .child(
                                    S.editor()
                                        .id('globalSeo')
                                        .schemaType('globalSeo')
                                        .documentId('globalSeo')
                                ),
                            S.listItem()
                                .title('Footer Settings')
                                .schemaType('footerSettings')
                                .child(
                                    S.editor()
                                        .id('footerSettings')
                                        .schemaType('footerSettings')
                                        .documentId('footerSettings')
                                ),
                        ])
                ),

            S.divider(),

            // 📄 CONTENT GROUP
            S.listItem()
                .title('Content')
                .child(
                    S.list()
                        .title('Content')
                        .items([
                            // ✅ HOMEPAGE singleton bovenaan
                            S.listItem()
                                .title('Homepage')
                                .schemaType('homepage')
                                .child(
                                    S.editor()
                                        .id('homepage')
                                        .schemaType('homepage')
                                        .documentId('homepage')
                                ),

                            S.listItem()
                                .title('Pages')
                                .schemaType('page')
                                .child(S.documentTypeList('page').title('Pages')),

                            S.listItem()
                                .title('Categories')
                                .schemaType('category')
                                .child(S.documentTypeList('category').title('Categories')),

                            S.listItem()
                                .title('Blog Posts')
                                .schemaType('post')
                                .child(S.documentTypeList('post').title('Blog Posts')),

                            S.listItem()
                                .title('Authors')
                                .schemaType('author')
                                .child(S.documentTypeList('author').title('Authors')),
                        ])
                ),
        ])
