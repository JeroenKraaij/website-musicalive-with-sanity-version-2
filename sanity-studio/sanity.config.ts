// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { myStructure } from './deskStructure' // let op: named import

export default defineConfig({
  name: 'default',
  title: 'Mijn Sanity Project',

  projectId: 'aw2vk504',
  dataset: 'production',
  useCdn: false,

  plugins: [
    deskTool({ structure: myStructure }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
