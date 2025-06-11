
// lib/sanity/structure.ts
import { StructureResolver } from 'sanity/desk';

export const myStructure: StructureResolver = (S) =>
    S.list()
        .title('Studio')
        .items([
            // ⚙️ SETTINGS
            S.listItem()
                .title('⚙️ Settings')
                .child(
                    S.list()
                        .title('Instellingen')
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

            // 📄 PAGINA'S
            S.listItem()
                .title('📄 Pagina’s')
                .child(
                    S.list()
                        .title('Pagina’s')
                        .items([
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
                                .title('404 Pagina')
                                .schemaType('notFoundPage')
                                .child(
                                    S.editor()
                                        .id('notFoundPage')
                                        .schemaType('notFoundPage')
                                        .documentId('notFoundPage')
                                ),
                        ])
                ),

            S.divider(),

            // 📰 BLOGS
            S.listItem()
                .title('📰 Blog')
                .child(
                    S.list()
                        .title('Blog')
                        .items([
                            S.listItem()
                                .title('Blog Posts')
                                .schemaType('post')
                                .child(S.documentTypeList('post').title('Blog Posts')),
                            S.listItem()
                                .title('Categories')
                                .schemaType('category')
                                .child(S.documentTypeList('category').title('Categories')),
                            S.listItem()
                                .title('Authors')
                                .schemaType('author')
                                .child(S.documentTypeList('author').title('Authors')),
                        ])
                ),

            S.divider(),

            // 🎤 SHOWCASES
            S.listItem()
                .title('🎤 Showcases')
                .child(
                    S.list()
                        .title('Showcases')
                        .items([
                            S.listItem()
                                .title('Showcase Items')
                                .schemaType('showcase')
                                .child(S.documentTypeList('showcase').title('Showcases')),
                            S.listItem()
                                .title('Categories')
                                .schemaType('category')
                                .child(S.documentTypeList('category').title('Categorieën')),
                            S.listItem()
                                .title('Authors')
                                .schemaType('author')
                                .child(S.documentTypeList('author').title('Auteurs')),
                        ])
                ),
        ]);
